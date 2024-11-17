using System;
using System.IO;
using System.IO.Compression;
using System.IO.Pipelines;
using System.ServiceModel.Channels;
using System.Text;
using System.Threading.Tasks;

namespace SoapCoreServer.Encoders
{
    internal class GZipMessageEncoder : IMessageEncoder
    {
        public GZipMessageEncoder(IMessageEncoder messageEncoder)
        {
            _innerEncoder = messageEncoder ?? throw new ArgumentNullException(nameof (messageEncoder));
        }

        public string ContentType => "application/soap+msbin1+gzip";

        public string MediaType => _innerEncoder.MediaType;

        public MessageVersion MessageVersion => MessageVersion.Soap12WSAddressing10;

        public Encoding Encoding => _innerEncoder.Encoding;

        public async Task<Message> ReadMessageAsync(PipeReader pipeReader, int maxSizeOfHeaders, string contentType)
        {
            var gzStream = new GZipStream(pipeReader.AsStream(true), CompressionMode.Decompress, false);
            return await _innerEncoder.ReadMessageAsync(PipeReader.Create(gzStream), maxSizeOfHeaders, contentType);
        }

        public Task<Message> ReadMessage(Stream stream, int maxSizeOfHeaders, string contentType)
        {
            var gzStream = new GZipStream(stream, CompressionMode.Decompress, false);
            return _innerEncoder.ReadMessage(gzStream, maxSizeOfHeaders, contentType);
        }

        public async Task WriteMessageAsync(Message message, PipeWriter pipeWriter)
        {
            var stream = pipeWriter.AsStream(true);
            using (var gzStream = new GZipStream(stream, CompressionMode.Compress, true))
            {
                await _innerEncoder.WriteMessageAsync(message, PipeWriter.Create(gzStream));
            }

            await stream.FlushAsync();
        }

        public Task WriteMessage(Message message, Stream stream)
        {
            using (var gzStream = new GZipStream(stream, CompressionMode.Compress, true))
            {
                _innerEncoder.WriteMessage(message, gzStream);
            }

            stream.Flush();

            return Task.CompletedTask;
        }

        private readonly IMessageEncoder _innerEncoder;
    }
}
