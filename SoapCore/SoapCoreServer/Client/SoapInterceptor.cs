using Castle.DynamicProxy;
using SoapCoreServer.BodyWriters;
using SoapCoreServer.Descriptions;
using SoapCoreServer.Encoders;
using System;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.ServiceModel.Channels;
using System.Text;
using System.Threading.Tasks;
using SoapCoreServer.Messages;
using System.Net;
using System.ServiceModel;

namespace SoapCoreServer.Client
{
    internal class SoapInterceptor<T> : IInterceptor where T : class
    {
        public SoapInterceptor(SoapClientOptions options)
        {
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _serviceDescription = new ServiceDescription(typeof(T), options.SerializerType);
        }

        public void Intercept(IInvocation invocation)
        {
            var operation = _serviceDescription.OperationDescriptions
                                               .FirstOrDefault(x => x.Name == invocation.Method.Name);

            if (operation == null)
            {
                throw new ArgumentNullException(nameof(operation));
            }

            Run(invocation, operation).Wait();
        }

        private const int MaxSizeOfHeaders = 0x10000;
        private const string SoapAction = "SOAPAction";
        private readonly SoapClientOptions _options;
        private readonly ServiceDescription _serviceDescription;

        private async Task Run(IInvocation invocation, OperationDescription operation)
        {
            var messageEncoder = EncoderFactory.Create(_options.MessageType, Encoding.UTF8);

            var clientHandler = new HttpClientHandler
            {
                CheckCertificateRevocationList = !_options.DoNotCheckCertificates,
                SslProtocols = _options.SslProtocols,
                UseDefaultCredentials = true,
                AllowAutoRedirect = true,
                PreAuthenticate = true,
                UseCookies = true,
                AutomaticDecompression = DecompressionMethods.All
            };

            if (_options.DoNotCheckCertificates)
            {
                clientHandler.ServerCertificateCustomValidationCallback = (_, _, _, _) => true;
            }

            var isStream = invocation.Arguments.Length == 1 &&
                           invocation.Arguments.FirstOrDefault() is Stream;

            using var client = new HttpClient(_options.CustomHandler == null
                                                  ? clientHandler
                                                  : _options.CustomHandler(clientHandler));

            client.Timeout = TimeSpan.FromSeconds(_options.TimeoutInSec);

            using var content = await CreateContent(invocation, operation, messageEncoder, isStream);

            using var request = new HttpRequestMessage(HttpMethod.Post, _options.ServiceUrl);
            request.Content = content;

            client.DefaultRequestHeaders.ConnectionClose = false;
            client.DefaultRequestHeaders.ExpectContinue = true;
            client.DefaultRequestHeaders.CacheControl = new CacheControlHeaderValue
            {
                NoCache = true,
                MaxAge = TimeSpan.Zero
            };

            if (isStream)
            {
                client.DefaultRequestHeaders.TransferEncodingChunked = true;
            }

            using var response = await client.SendAsync(request, HttpCompletionOption.ResponseHeadersRead);

            if (response.StatusCode == HttpStatusCode.NotFound)
            {
                throw new EndpointNotFoundException($"Endpoint on {_options.ServiceUrl} not found!");
            }

            if (!(response.IsSuccessStatusCode || response.StatusCode == HttpStatusCode.InternalServerError))
            {
                throw new WebException($"Endpoint on {_options.ServiceUrl} has web exception: {response.StatusCode}!");
            }

            await using var responseStream = await response.Content.ReadAsStreamAsync();
            var responseMessage =
                await messageEncoder.ReadMessage(responseStream, MaxSizeOfHeaders, messageEncoder.ContentType);

            ResponseHelper.FillResponse(invocation, responseMessage, operation);
        }

        private async Task<HttpContent> CreateContent(IInvocation invocation,
                                                      OperationDescription operation,
                                                      IMessageEncoder messageEncoder,
                                                      bool isStream)
        {
            var message = CreateRequestMessage(invocation, operation, messageEncoder);

            HttpContent content;

            if (isStream)
            {
                content = new PushStreamContent(async (outputStream, _, _) =>
                {
                    await messageEncoder.WriteMessage(message, outputStream);
                    outputStream.Close();
                });
            }
            else
            {
                var ms = new MemoryStream();
                await messageEncoder.WriteMessage(message, ms);
                ms.Seek(0, SeekOrigin.Begin);

                content = new StreamContent(ms);

                content.Headers.ContentLength = ms.Length;
                content.Headers.Add(SoapAction, $"\"{operation.SoapAction}\"");
            }

            content.Headers.ContentType = new MediaTypeHeaderValue(messageEncoder.ContentType)
            {
                CharSet = "utf-8"
            };

            return content;
        }

        private Message CreateRequestMessage(IInvocation invocation,
                                             OperationDescription operation,
                                             IMessageEncoder messageEncoder)
        {
            if (invocation.Arguments.Length == 0)
            {
                return new CustomMessage(Message.CreateMessage(messageEncoder.MessageVersion, operation.SoapAction));
            }

            if (invocation.Arguments.Length == 1)
            {
                BodyWriter bodyWriter;
                var isStream = false;

                if (invocation.Arguments.FirstOrDefault() is Stream stream)
                {
                    isStream = true;
                    bodyWriter = new StreamBodyWriter(
                        operation.Request.WrapperNamespace ?? operation.ContractDescription.Namespace,
                        operation.Name,
                        operation.Request.MessageName,
                        stream);
                }
                else
                {
                    bodyWriter = new WrappedBodyWriter(operation.Request, invocation.Arguments.First());
                }

                var message = Message.CreateMessage(messageEncoder.MessageVersion,
                                                    operation.SoapAction,
                                                    bodyWriter);

                if (!isStream)
                {
                    FillMessageHeaders(message, operation, invocation.Arguments.First());

                    message.Headers.Action = null;
                }

                return new CustomMessage(message);
            }

            throw new Exception("Arguments count must be 0 or 1!");
        }

        private void FillMessageHeaders(Message message, OperationDescription operation, object data)
        {
            if (data == null) return;

            var props = data.GetType()
                            .GetFieldsAndProperties();

            foreach (var header in operation.Request.Headers.OrderBy(x => x.Order))
            {
                var prop = props.FirstOrDefault(x => x.Name == header.Name);
                if (prop == null) continue;

                var value = prop.GetValue(data);
                if (value != null)
                {
                    message.Headers.Add(new DataHeader(header.Name, header.Ns, value));
                }
            }
        }
    }
}
