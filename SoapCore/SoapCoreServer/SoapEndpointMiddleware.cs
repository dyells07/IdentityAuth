using System;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Reflection;
using System.ServiceModel;
using System.ServiceModel.Channels;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using SoapCoreServer.BodyWriters;
using SoapCoreServer.Descriptions;
using SoapCoreServer.Encoders;
using SoapCoreServer.Filters;
using SoapCoreServer.Messages;

namespace SoapCoreServer
{
    public class SoapEndpointMiddleware
    {
        public SoapEndpointMiddleware(ILogger<SoapEndpointMiddleware> logger,
                                      RequestDelegate requestDelegate,
                                      Type serviceType,
                                      SoapCoreOptions options)
        {
            if (options == null)
            {
                throw new ArgumentNullException(nameof (options));
            }

            Utils.ValidateBasePath(options.BasePath);

            if (options.Endpoints == null || options.Endpoints.Count == 0)
            {
                throw new ArgumentException("Endpoints not set!");
            }

            _logger = logger;
            _serviceType = serviceType;
            _options = options;
            _requestDelegate = requestDelegate;
            _serviceDescription = new ServiceDescription(_serviceType, options.SerializerType);
        }

        public async Task Invoke(HttpContext httpContext)
        {
            if (httpContext.Request.Path.StartsWithSegments(_options.BasePath, StringComparison.InvariantCultureIgnoreCase))
            {
                httpContext.Request.EnableBuffering();

                _logger.LogInformation($"Request for {httpContext.Request.Path} received ({httpContext.Request.ContentLength ?? 0} bytes)");

                if (httpContext.Request.Method?.ToLower() == "get" &&
                    (httpContext.Request.Query.ContainsKey("singleWsdl") ||
                     httpContext.Request.Query.ContainsKey("wsdl")))
                {
                    await ProcessMeta(httpContext);
                }
                else
                {
                    await ProcessOperation(httpContext);
                }
            }
            else
            {
                await _requestDelegate(httpContext);
            }
        }

        #region private

        private const string SoapFaultNs = "http://www.w3.org/2005/08/addressing/soap/fault";
        private const string SoapAction = "SOAPAction";
        private const int MaxSizeOfHeaders = 0x10000;

        private readonly ILogger<SoapEndpointMiddleware> _logger;
        private readonly Type _serviceType;
        private readonly SoapCoreOptions _options;
        private readonly RequestDelegate _requestDelegate;
        private readonly ServiceDescription _serviceDescription;

        private async Task ProcessMeta(HttpContext httpContext)
        {
            var baseUrl = $"{httpContext.Request.Scheme}://{httpContext.Request.Host}{httpContext.Request.Path}";

            var bodyWriter = new MetaBodyWriter(_serviceDescription, baseUrl, _options.Endpoints);
            var encoder = EncoderFactory.Create(MessageType.Text, Encoding.UTF8);

            var responseMessage = Message.CreateMessage(encoder.MessageVersion, null, bodyWriter);
            responseMessage = new MetaMessage(responseMessage, _serviceDescription);

            httpContext.Response.ContentType = encoder.ContentType;

            await WriteMessageAsync(encoder, responseMessage, httpContext);
        }

        private Endpoint GetEndpoint(HttpContext httpContext)
        {
            var path = httpContext.Request.Path.Value;
            if (string.IsNullOrWhiteSpace(path) || path.Length < _options.BasePath.Length)
            {
                return null;
            }

            var endpointUrl = path.Substring(_options.BasePath.Length, path.Length - _options.BasePath.Length);
            if (string.IsNullOrWhiteSpace(endpointUrl))
            {
                endpointUrl = "/";
            }

            var endpoint = _options.Endpoints
                                   .FirstOrDefault(x => x.Url.Equals(endpointUrl,
                                                                     StringComparison.InvariantCultureIgnoreCase));

            return endpoint;
        }

        private Message CreateResponseMessage(OperationDescription operation,
                                              IMessageEncoder messageEncoder,
                                              object value)
        {
            Message responseMessage;
            if (operation.IsOneWay)
            {
                responseMessage = new CustomMessage(Message.CreateMessage(messageEncoder.MessageVersion, null));
            }
            else
            {
                var bodyWriter = new WrappedBodyWriter(operation.Response, value ?? new object());

                responseMessage = Message.CreateMessage(messageEncoder.MessageVersion, null, bodyWriter);
                responseMessage = new CustomMessage(responseMessage);
            }

            return responseMessage;
        }

        // ReSharper disable once UnusedMethodReturnValue.Local
        private async Task<Message> ProcessOperation(HttpContext httpContext)
        {
            var endpoint = GetEndpoint(httpContext);
            if (endpoint == null)
            {
                await ProcessInfoPage(httpContext);
                return null;
            }

            if (endpoint.Type.IsStreamed())
            {
                return await ProcessStreamedRequest(httpContext, endpoint.Type, endpoint.Encoding);
            }

            return await ProcessBufferedRequest(httpContext, endpoint.Type, endpoint.Encoding);
        }

        private async Task ProcessInfoPage(HttpContext httpContext)
        {
            var pageText = GetInfoPage();
            var partService = _serviceType.Name;
            var partHost =
                $"{httpContext.Request.Scheme}://{httpContext.Request.Host}{httpContext.Request.Path}";

            pageText = pageText.Replace("[ServiceName]", partService)
                               .Replace("[Url]", partHost);

            httpContext.Response.ContentType = "text/html";

            await httpContext.Response.WriteAsync(pageText);
        }

        private async Task<Message> ProcessStreamedRequest(HttpContext httpContext, MessageType messageType, Encoding encoding)
        {
            Message responseMessage;
            try
            {
                var messageEncoder = EncoderFactory.Create(messageType, encoding);

                CheckContentType(messageEncoder.ContentType, encoding, httpContext.Request.ContentType);

                var requestMessage = await ReadMessageAsync(httpContext, messageEncoder);

                var filters = GetFilters(httpContext);

                foreach (var filter in filters)
                {
                    await filter.OnRequest(requestMessage);
                }

                var soapAction = messageType == MessageType.StreamText
                    ? httpContext.Request.Headers[SoapAction].Single().Trim('"')
                    : requestMessage.Headers.Action;

                var operation = _serviceDescription
                                .OperationDescriptions
                                .FirstOrDefault(x => x.SoapAction.Equals(soapAction, StringComparison.Ordinal) ||
                                                     x.Name.Equals(soapAction, StringComparison.Ordinal));

                if (operation == null)
                {
                    throw new InvalidOperationException($"No operation found for specified action: {soapAction}");
                }

                var serviceInstance = httpContext.RequestServices.GetService(_serviceDescription.ServiceType);
                if (serviceInstance == null)
                {
                    throw new Exception($"Service type {_serviceDescription.ServiceType.Name} not registered!");
                }

                object[] arguments;
                if (operation.IsStreamRequest)
                {
                    Stream stream = new MessageBodyStream(requestMessage,
                                                          operation.Name,
                                                          operation.ContractDescription.Namespace,
                                                          operation.Request.MessageName,
                                                          operation.ContractDescription.Namespace);
                    arguments = new object[] {stream};
                }
                else
                {
                    arguments = operation.IsEmptyRequest
                        ? Array.Empty<object>()
                        : RequestHelper.GetRequestArguments(requestMessage, operation);
                }

                var responseObject = await RunMethod(operation, serviceInstance, arguments);

                if (operation.IsOneWay) return null;

                responseMessage = CreateResponseMessage(operation, messageEncoder, responseObject);

                httpContext.Response.ContentType = httpContext.Request.ContentType;
                httpContext.Response.Headers[SoapAction] = operation.ReplyAction;

                await WriteMessageAsync(messageEncoder, responseMessage, httpContext);

                foreach (var filter in filters)
                {
                    await filter.OnResponse(responseMessage);
                }
            }
            catch (Exception exception)
            {
                _logger.LogError(0, exception, exception.Message);
                responseMessage = await WriteErrorResponseMessage(exception,
                                                                  StatusCodes.Status500InternalServerError,
                                                                  httpContext);
            }

            return responseMessage;
        }

        private async Task<Message> ProcessBufferedRequest(HttpContext httpContext, MessageType messageType, Encoding encoding)
        {
            try
            {
                if (httpContext.Request.ContentLength > 0)
                {
                    var messageEncoder = EncoderFactory.Create(messageType, encoding);

                    CheckContentType(messageEncoder.ContentType, encoding, httpContext.Request.ContentType);

                    var requestMessage = await ReadMessageAsync(httpContext, messageEncoder);

                    var filters = GetFilters(httpContext);

                    foreach (var filter in filters)
                    {
                        await filter.OnRequest(requestMessage);
                    }

                    var soapAction = messageType == MessageType.Text
                        ? httpContext.Request.Headers[SoapAction].Single().Trim('"')
                        : requestMessage.Headers.Action;

                    var operation = _serviceDescription
                                    .OperationDescriptions
                                    .FirstOrDefault(x => x.SoapAction.Equals(soapAction, StringComparison.Ordinal) ||
                                                         x.Name.Equals(soapAction, StringComparison.Ordinal));

                    if (operation == null)
                    {
                        throw new InvalidOperationException($"No operation found for specified action: {soapAction}");
                    }

                    _logger.LogInformation($"Request for operation {operation.ContractDescription.Name}.{operation.Name} received");

                    var serviceInstance = httpContext.RequestServices
                                                     .GetRequiredService(_serviceDescription.ServiceType);

                    var arguments = operation.IsEmptyRequest
                        ? Array.Empty<object>()
                        : RequestHelper.GetRequestArguments(requestMessage, operation);

                    var responseObject = await RunMethod(operation, serviceInstance, arguments);

                    if (operation.IsOneWay) return null;

                    var responseMessage = CreateResponseMessage(operation, messageEncoder, responseObject);

                    httpContext.Response.ContentType = httpContext.Request.ContentType;
                    httpContext.Response.Headers[SoapAction] = operation.ReplyAction;

                    await WriteMessageAsync(messageEncoder, responseMessage, httpContext);

                    foreach (var filter in filters)
                    {
                        await filter.OnResponse(responseMessage);
                    }

                    return responseMessage;
                }

                var pageText = GetInfoPage();
                var partService = _serviceType.Name;
                var partHost =
                    $"{httpContext.Request.Scheme}://{httpContext.Request.Host}{httpContext.Request.Path}";

                pageText = pageText.Replace("[ServiceName]", partService)
                                   .Replace("[Url]", partHost);

                httpContext.Response.ContentType = "text/html";

                await httpContext.Response.WriteAsync(pageText);
            }
            catch (Exception exception)
            {
                _logger.LogError(0, exception, exception.Message);
                return await WriteErrorResponseMessage(exception,
                                                       StatusCodes.Status500InternalServerError,
                                                       httpContext);
            }

            return null;
        }

        private async Task<object> RunMethod(OperationDescription operation,
                                             object serviceInstance,
                                             object[] arguments)
        {
            var responseObject = operation.DispatchMethod.Invoke(serviceInstance, arguments);

            if (operation.DispatchMethod.ReturnType.IsTask())
            {
                var responseTask = (Task) responseObject;
                // ReSharper disable once PossibleNullReferenceException
                await responseTask;
            }
            else if (operation.DispatchMethod.ReturnType.IsValuableTask())
            {
                var responseTask = (Task) responseObject;
                // ReSharper disable once PossibleNullReferenceException
                await responseTask;
                responseObject = responseTask.GetType().GetProperty("Result")?.GetValue(responseTask);
            }

            return responseObject;
        }

        private async Task<Message> WriteErrorResponseMessage(Exception exception,
                                                              int statusCode,
                                                              HttpContext httpContext)
        {
            var ex = exception.InnerException ?? exception;

            var transformer = httpContext.RequestServices.GetService<ExceptionTransformer>();
            var errorText = transformer == null ? ex.Message : transformer.Transform(ex);

            var endpoint = GetEndpoint(httpContext);
            var messageEncoder = EncoderFactory.Create(endpoint?.Type ?? MessageType.Text,
                                                       endpoint?.Encoding ?? Encoding.UTF8);

            var msgFault = new FaultException(new FaultReason(errorText), new FaultCode("Server"), SoapFaultNs)
                .CreateMessageFault();

            var msg = new FaultMessage(msgFault);

            var bodyWriter = new FaultBodyWriter(msg, messageEncoder.MessageVersion.Envelope);
            var responseMessage = new CustomMessage(Message.CreateMessage(messageEncoder.MessageVersion,
                                                                          messageEncoder.MessageVersion.Envelope ==
                                                                          EnvelopeVersion.Soap11
                                                                              ? null
                                                                              : SoapFaultNs,
                                                                          bodyWriter));
            httpContext.Response.ContentType = messageEncoder.ContentType;
            httpContext.Response.StatusCode = statusCode;

            await WriteMessageAsync(messageEncoder, responseMessage, httpContext);

            return responseMessage;
        }

        private static Task WriteMessageAsync(IMessageEncoder messageEncoder,
                                              Message responseMessage,
                                              HttpContext httpContext)
        {
            return messageEncoder.WriteMessageAsync(responseMessage, httpContext.Response.BodyWriter);
        }

        private static Task<Message> ReadMessageAsync(HttpContext httpContext, IMessageEncoder messageEncoder)
        {
            return messageEncoder.ReadMessageAsync(httpContext.Request.BodyReader,
                                                   MaxSizeOfHeaders,
                                                   httpContext.Request.ContentType);
        }

        private string GetInfoPage()
        {
            var type = GetType();

            using var template = type.GetTypeInfo()
                                     .Assembly
                                     .GetManifestResourceStream(type, "page.html");
            using var sr = new StreamReader(template ?? throw new InvalidOperationException("page.html"));

            return sr.ReadToEnd();
        }

        private void CheckContentType(string originalContentType, Encoding originalEncoding, string checkedContentType)
        {
            if (MediaTypeHeaderValue.TryParse(checkedContentType, out var parsedContentType))
            {
                if (parsedContentType.MediaType.Equals(originalContentType,
                                                       StringComparison.InvariantCultureIgnoreCase))
                {
                    if (string.IsNullOrEmpty(parsedContentType.CharSet) ||
                        parsedContentType.CharSet.Equals(originalEncoding.WebName,
                                                         StringComparison.InvariantCultureIgnoreCase))
                    {
                        return;
                    }

                    throw new Exception($"Charset must be {originalEncoding.WebName}");
                }
            }

            throw new Exception($"Content-Type must be {originalContentType}");
        }

        private IAsyncFilter[] GetFilters(HttpContext httpContext)
        {
            return _options.Filters
                           .Select(x => httpContext.RequestServices.GetRequiredService(x) as IAsyncFilter)
                           .Where(x => x != null)
                           .ToArray();
        }

        #endregion private
    }
}
