using System;
using System.IO;
using System.IO.Pipelines;
using System.ServiceModel.Channels;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace SoapCoreServer.Encoders
{
    internal class BinaryMessageEncoder : IMessageEncoder
    {
        public BinaryMessageEncoder(Encoding encoding)
        {
            Encoding = encoding;
        }

        public MessageVersion MessageVersion => MessageVersion.Soap12WSAddressing10;

        public string ContentType => "application/soap+msbin1";

        public string MediaType => "application/soap+xml";

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

            var reader = XmlDictionaryReader.CreateBinaryReader(stream,
                WcfBinary.WcfBinaryDictionary,
                XmlDictionaryReaderQuotas.Max);

            var message = Message.CreateMessage(reader, maxSizeOfHeaders, MessageVersion);

            return Task.FromResult(message);
        }

        public async Task WriteMessageAsync(Message message, PipeWriter pipeWriter)
        {
            if (message == null)
            {
                throw new ArgumentNullException(nameof (message));
            }

            if (pipeWriter == null)
            {
                throw new ArgumentNullException(nameof (pipeWriter));
            }

            using var writer = XmlDictionaryWriter.CreateBinaryWriter(pipeWriter.AsStream(true));

            if (IsUtf8)
            {
                message.WriteMessage(writer);
            }
            else
            {
                // ReSharper disable once MethodHasAsyncOverload
                writer.WriteStartDocument();

                message.WriteMessage(writer);

                // ReSharper disable once MethodHasAsyncOverload
                writer.WriteEndDocument();
            }

            await writer.FlushAsync();
            await pipeWriter.FlushAsync();
        }

        public Task WriteMessage(Message message, Stream stream)
        {
            using var writer = XmlDictionaryWriter.CreateBinaryWriter(stream);

            if (IsUtf8)
            {
                message.WriteMessage(writer);
            }
            else
            {
                // ReSharper disable once MethodHasAsyncOverload
                writer.WriteStartDocument();

                message.WriteMessage(writer);

                // ReSharper disable once MethodHasAsyncOverload
                writer.WriteEndDocument();
            }

            writer.Flush();

            return Task.CompletedTask;
        }

        private bool IsUtf8 => Encoding.WebName == Encoding.UTF8.WebName;
    }
}
