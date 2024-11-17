using System.IO;
using System.IO.Pipelines;
using System.ServiceModel.Channels;
using System.Text;
using System.Threading.Tasks;

namespace SoapCoreServer.Encoders
{
    internal interface IMessageEncoder
    {
        Task<Message> ReadMessageAsync(PipeReader pipeReader, int maxSizeOfHeaders, string contentType);

        Task<Message> ReadMessage(Stream stream, int maxSizeOfHeaders, string contentType);

        Task WriteMessageAsync(Message message, PipeWriter pipeWriter);

        Task WriteMessage(Message message, Stream stream);

        MessageVersion MessageVersion { get; }

        string ContentType { get; }

        string MediaType { get; }

        Encoding Encoding { get; }
    }
}
