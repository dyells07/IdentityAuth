using System.ServiceModel;

namespace SoapCoreServerWebDemo.SoapService
{
    [ServiceContract(Namespace = "uri://demo")]
    public interface IDemoService
    {
        [OperationContract(Action = "uri://demo" + "/SendHello")]
        MsgHelloResponse SendHello(MsgHelloRequest request);
    }
}
