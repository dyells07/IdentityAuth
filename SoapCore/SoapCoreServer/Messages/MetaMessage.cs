using System.Linq;
using System.ServiceModel.Channels;
using System.Xml;
using SoapCoreServer.Descriptions;

namespace SoapCoreServer.Messages
{
    internal class MetaMessage : Message
    {
        public MetaMessage(Message message, ServiceDescription service)
        {
            _message = message;
            _service = service;
        }

        /// <summary>
        /// override to replace s:Envelope
        /// </summary>
        /// <param name="writer"></param>
        protected override void OnWriteStartEnvelope(XmlDictionaryWriter writer)
        {
            writer.WriteStartElement("wsdl", "definitions", SoapNamespaces.Wsdl);
            writer.WriteAttributeString("name", _service.ServiceType.Name);
            writer.WriteAttributeString("targetNamespace", _service.ContractDescriptions.First().Namespace);
            writer.WriteXmlnsAttribute("wsdl", SoapNamespaces.Wsdl);
            writer.WriteXmlnsAttribute("wsap", SoapNamespaces.Wsap);
            writer.WriteXmlnsAttribute("wsa10", SoapNamespaces.Wsa10);
            writer.WriteXmlnsAttribute("tns", _service.ContractDescriptions.First().Namespace);
            writer.WriteXmlnsAttribute("msc", SoapNamespaces.Msc);
            writer.WriteXmlnsAttribute("soapenc", SoapNamespaces.SoapEnc);
            writer.WriteXmlnsAttribute("wsx", SoapNamespaces.Wsx);
            writer.WriteXmlnsAttribute("soap", SoapNamespaces.Soap);
            writer.WriteXmlnsAttribute("wsam", SoapNamespaces.Wsam);
            writer.WriteXmlnsAttribute("wsa", SoapNamespaces.Wsa);
            writer.WriteXmlnsAttribute("wsp", SoapNamespaces.Wsp);
            writer.WriteXmlnsAttribute("wsaw", SoapNamespaces.Wsaw);
            writer.WriteXmlnsAttribute("soap12", SoapNamespaces.Soap12);
            writer.WriteXmlnsAttribute("wsu", SoapNamespaces.Wsu);
            writer.WriteXmlnsAttribute("xsd", SoapNamespaces.Xsd);
        }

        /// <summary>
        /// override to replace s:Body
        /// </summary>
        /// <param name="writer"></param>
        protected override void OnWriteStartBody(XmlDictionaryWriter writer)
        {
            //writer.WriteStartElement("wsdl:types");
        }

        protected override void OnWriteBodyContents(XmlDictionaryWriter writer)
        {
            _message.WriteBodyContents(writer);
        }

        public override MessageHeaders Headers => _message.Headers;

        public override MessageProperties Properties => _message.Properties;

        public override MessageVersion Version => _message.Version;

        private readonly Message _message;
        private readonly ServiceDescription _service;
    }
}
