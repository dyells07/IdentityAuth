using System;
using System.IO;
using System.IO.Pipelines;
using System.ServiceModel.Channels;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace SoapCoreServer.Encoders
{
    internal class TextMessageEncoder : IMessageEncoder
    {
        public TextMessageEncoder(Encoding encoding)
        {
            Encoding = encoding;
        }

        public MessageVersion MessageVersion => MessageVersion.Soap11;

        public string ContentType => "text/xml";

        public string MediaType => "text/xml";

        public Encoding Encoding { get; }

        public async Task<Message> ReadMessageAsync(PipeReader pipeReader, int maxSizeOfHeaders, string contentType)
        {
            if (pipeReader == null)
            {
                throw new ArgumentNullException(nameof (pipeReader));
            }

            return await ReadMessage(pipeReader.AsStream(true), maxSizeOfHeaders, contentType);
        }

        public Task<Message> ReadMessage(Stream stream, int maxSizeOfHeaders, string contentType)
        {
            if (stream == null)
            {
                throw new ArgumentNullException(nameof (stream));
            }

            var reader = XmlDictionaryReader.CreateTextReader(stream,
                                                              Encoding,
                                                              XmlDictionaryReaderQuotas.Max,
                                                              _ => { });

            var message = Message.CreateMessage(reader, maxSizeOfHeaders, MessageVersion);

            return Task.FromResult(message);
        }

        public virtual async Task WriteMessageAsync(Message message, PipeWriter pipeWriter)
        {
            if (message == null)
            {
                throw new ArgumentNullException(nameof (message));
            }

            if (pipeWriter == null)
            {
                throw new ArgumentNullException(nameof (pipeWriter));
            }

            using var xmlTextWriter = XmlDictionaryWriter.CreateTextWriter(pipeWriter.AsStream(true), Encoding, false);

            if (IsUtf8)
            {
                message.WriteMessage(xmlTextWriter);
            }
            else
            {
                // ReSharper disable once MethodHasAsyncOverload
                xmlTextWriter.WriteStartDocument();

                message.WriteMessage(xmlTextWriter);

                // ReSharper disable once MethodHasAsyncOverload
                xmlTextWriter.WriteEndDocument();
            }

            await xmlTextWriter.FlushAsync();
            await pipeWriter.FlushAsync();
        }

        public virtual Task WriteMessage(Message message, Stream stream)
        {
            if (message == null)
            {
                throw new ArgumentNullException(nameof (message));
            }

            if (stream == null)
            {
                throw new ArgumentNullException(nameof (stream));
            }

            using var xmlTextWriter = XmlDictionaryWriter.CreateTextWriter(stream, Encoding, false);

            if (IsUtf8)
            {
                message.WriteMessage(xmlTextWriter);
            }
            else
            {
                // ReSharper disable once MethodHasAsyncOverload
                xmlTextWriter.WriteStartDocument();

                message.WriteMessage(xmlTextWriter);

                // ReSharper disable once MethodHasAsyncOverload
                xmlTextWriter.WriteEndDocument();
            }

            xmlTextWriter.Flush();

            return Task.CompletedTask;
        }

        private bool IsUtf8 => Encoding.WebName == Encoding.UTF8.WebName;
    }
}
