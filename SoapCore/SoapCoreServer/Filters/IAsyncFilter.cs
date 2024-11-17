using System.ServiceModel.Channels;
using System.Threading.Tasks;

namespace SoapCoreServer.Filters
{
    public interface IAsyncFilter
    {
        Task OnRequest(Message message);

        Task OnResponse(Message message);
    }
}
