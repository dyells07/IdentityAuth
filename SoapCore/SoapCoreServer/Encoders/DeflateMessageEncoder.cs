using System;
using System.IO;
using System.IO.Compression;
using System.IO.Pipelines;
using System.ServiceModel.Channels;
using System.Text;
using System.Threading.Tasks;

namespace SoapCoreServer.Encoders
{
    internal class DeflateMessageEncoder : IMessageEncoder
    {
        public DeflateMessageEncoder(IMessageEncoder messageEncoder)
        {
            _innerEncoder = messageEncoder ?? throw new ArgumentNullException(nameof (messageEncoder));
        }

        public string ContentType => "application/soap+msbin1+deflate";

        public string MediaType => _innerEncoder.MediaType;

        public MessageVersion MessageVersion => MessageVersion.Soap12WSAddressing10;

        public Encoding Encoding => _innerEncoder.Encoding;

        public async Task<Message> ReadMessageAsync(PipeReader pipeReader, int maxSizeOfHeaders, string contentType)
        {
            var dfStream = new DeflateStream(pipeReader.AsStream(true), CompressionMode.Decompress, false);
            return await _innerEncoder.ReadMessageAsync(PipeReader.Create(dfStream), maxSizeOfHeaders, contentType);
        }

        public Task<Message> ReadMessage(Stream stream, int maxSizeOfHeaders, string contentType)
        {
            var dfStream = new DeflateStream(stream, CompressionMode.Decompress, false);
            return _innerEncoder.ReadMessage(dfStream, maxSizeOfHeaders, contentType);
        }

        public async Task WriteMessageAsync(Message message, PipeWriter pipeWriter)
        {
            var stream = pipeWriter.AsStream(true);
            using (var dfStream = new DeflateStream(stream, CompressionMode.Compress, true))
            {
                await _innerEncoder.WriteMessageAsync(message, PipeWriter.Create(dfStream));
            }

            await stream.FlushAsync();
        }

        public Task WriteMessage(Message message, Stream stream)
        {
            using (var dfStream = new DeflateStream(stream, CompressionMode.Compress, true))
            {
                _innerEncoder.WriteMessage(message, dfStream);
            }

            stream.Flush();

            return Task.CompletedTask;
        }

        private readonly IMessageEncoder _innerEncoder;
    }
}
