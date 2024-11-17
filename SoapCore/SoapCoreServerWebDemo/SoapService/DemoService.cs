using System;

namespace SoapCoreServerWebDemo.SoapService
{
    public class DemoService : IDemoService
    {
        public MsgHelloResponse SendHello(MsgHelloRequest request)
        {
            return new MsgHelloResponse
            {
                TextResponse = request.TextRequest,
                Timestamp = DateTime.UtcNow
            };
        }
    }
}
