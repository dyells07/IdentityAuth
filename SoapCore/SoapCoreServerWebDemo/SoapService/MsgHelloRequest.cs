using System.Runtime.Serialization;
using System.ServiceModel;

namespace SoapCoreServerWebDemo.SoapService
{
    [MessageContract(WrapperName = "MsgPushDataRequest", WrapperNamespace = "uri://demo", IsWrapped = true)]
    [DataContract(Name = "MsgPushDataRequest", Namespace = "uri://demo")]
    public class MsgHelloRequest
    {
        [MessageBodyMember(Namespace = "uri://demo", Order = 0)]
        [DataMember(IsRequired = true)]
        public string TextRequest { get; set; }
    }
}
