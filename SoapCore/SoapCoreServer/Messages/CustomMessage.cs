using System.ServiceModel.Channels;
using System.Xml;

namespace SoapCoreServer.Messages
{
    public class CustomMessage : Message
    {
        public CustomMessage(Message message)
        {
            _message = message;
        }

        protected override void OnWriteStartEnvelope(XmlDictionaryWriter writer)
        {
            _message.WriteStartEnvelope(writer);
            writer.WriteXmlnsAttribute("xsd", SoapNamespaces.Xsd);
            writer.WriteXmlnsAttribute("xsi", "http://www.w3.org/2001/XMLSchema-instance");
        }

        protected override void OnWriteBodyContents(XmlDictionaryWriter writer)
        {
            _message.WriteBodyContents(writer);
        }

        public override MessageHeaders Headers => _message.Headers;

        public override MessageProperties Properties => _message.Properties;

        public override MessageVersion Version => _message.Version;

        private readonly Message _message;
    }
}
