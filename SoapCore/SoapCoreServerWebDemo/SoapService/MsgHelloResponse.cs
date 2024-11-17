using System;
using System.Runtime.Serialization;
using System.ServiceModel;

namespace SoapCoreServerWebDemo.SoapService
{
    [MessageContract(WrapperName = "MsgHelloResponse", WrapperNamespace = "uri://demo", IsWrapped = true)]
    [DataContract(Name = "MsgHelloResponse", Namespace = "uri://demo")]
    public class MsgHelloResponse
    {
        [MessageBodyMember(Namespace = "uri://demo", Order = 0)]
        [DataMember(IsRequired = true)]
        public string TextResponse { get; set; }

        [MessageBodyMember(Namespace = "uri://demo", Order = 1)]
        [DataMember(IsRequired = true)]
        public DateTime Timestamp { get; set; }
    }
}
