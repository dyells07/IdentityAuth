using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.ServiceModel.Channels;
using System.Xml;

namespace SoapCoreServer.Messages
{
    public class FaultMessage : MessageFault
    {
        public FaultMessage(MessageFault messageFault)
        {
            _innerFault = messageFault;
        }

        public void WriteTo(XmlWriter writer, EnvelopeVersion version)
        {
            WriteTo(XmlDictionaryWriter.CreateDictionaryWriter(writer), version);
        }

        public void WriteTo(XmlDictionaryWriter writer, EnvelopeVersion version)
        {
            if (writer == null)
            {
                throw new ArgumentException(nameof (writer));
            }

            if (version == null)
            {
                throw new ArgumentException(nameof (version));
            }

            if (version == EnvelopeVersion.Soap12)
            {
                WriteTo12(writer);
            }
            else if (version == EnvelopeVersion.Soap11)
            {
                WriteTo11(writer);
            }
            else if (version == EnvelopeVersion.None)
            {
                WriteToNone(writer);
            }
            else
            {
                throw new ArgumentException($"Unknown EnvelopeVersion: {version}");
            }
        }

        protected override void OnWriteDetailContents(XmlDictionaryWriter writer)
        {
        }

        public override FaultCode Code => _innerFault.Code;

        public override bool HasDetail => _innerFault.HasDetail;

        public override FaultReason Reason => _innerFault.Reason;

        public override string Node => _innerFault.Node;

        public override string Actor => _innerFault.Actor;

        #region private

        private readonly MessageFault _innerFault;

        private void WriteTo12(XmlDictionaryWriter writer)
        {
            WriteTo12Driver(writer, EnvelopeVersion.Soap12);
        }

        private void WriteToNone(XmlDictionaryWriter writer)
        {
            WriteTo12Driver(writer, EnvelopeVersion.None);
        }

        private void WriteTo12Driver(XmlDictionaryWriter writer, EnvelopeVersion version)
        {
            var ns = WcfBinary.GetString(version.GetEnvelopeNamespace());

            writer.WriteStartElement(WcfBinary.GetString("Fault"), ns);
            writer.WriteStartElement(WcfBinary.GetString("Code"), ns);

            WriteFaultCode12Driver(writer, Code, version);

            writer.WriteEndElement();
            writer.WriteStartElement(WcfBinary.GetString("Reason"), ns);

            // ReSharper disable once PossibleNullReferenceException
            var translations = (ICollection<FaultReasonText>) typeof (FaultReason)
                                                              .GetProperty("Translations")
                                                              .GetValue(Reason);

            // ReSharper disable once PossibleNullReferenceException
            foreach (var text in translations)
            {
                writer.WriteStartElement(WcfBinary.GetString("Text"), ns);
                writer.WriteAttributeString("xml", "lang", "http://www.w3.org/XML/1998/namespace", text.XmlLang);
                writer.WriteString(text.Text);
                writer.WriteEndElement();
            }

            writer.WriteEndElement();
            if (Node.Length > 0)
            {
                writer.WriteElementString(WcfBinary.GetString("Node"), ns, Node);
            }

            if (Actor.Length > 0)
            {
                writer.WriteElementString(WcfBinary.GetString("Role"), ns, Actor);
            }

            if (HasDetail)
            {
                OnWriteDetail(writer, version);
            }
            writer.WriteEndElement();
        }

        private void WriteFaultCode12Driver(XmlDictionaryWriter writer, FaultCode faultCode, EnvelopeVersion version)
        {
            var nsString = version.GetEnvelopeNamespace();
            var ns = WcfBinary.GetString(nsString);

            writer.WriteStartElement(WcfBinary.GetString("Value"), ns);

            var prefix = writer.LookupPrefix(nsString);
            if (prefix == null)
            {
                writer.WriteXmlnsAttribute("a", ns);
                writer.WriteString($"a:{faultCode.Name}");
            }
            else
            {
                writer.WriteString($"{prefix}:{faultCode.Name}");
            }

            writer.WriteEndElement();

            if (faultCode.SubCode != null)
            {
                writer.WriteStartElement(WcfBinary.GetString("Subcode"), ns);
                WriteFaultCode12Driver(writer, faultCode.SubCode, version);
                writer.WriteEndElement();
            }
        }

        private void WriteTo11(XmlDictionaryWriter writer)
        {
            writer.WriteStartElement(WcfBinary.GetString("Fault"),
                                     WcfBinary.GetString(EnvelopeVersion.Soap11.GetEnvelopeNamespace()));

            writer.WriteStartElement(WcfBinary.GetString("faultcode"),
                                     WcfBinary.GetString(""));

            var faultCode = Code;
            if (faultCode.SubCode != null)
            {
                faultCode = faultCode.SubCode;
            }

            string name;
            if (faultCode.IsSenderFault)
            {
                name = "Client";
            }
            else if (faultCode.IsReceiverFault)
            {
                name = "Server";
            }
            else
            {
                name = faultCode.Name;
            }

            var ns = faultCode.IsPredefinedFault
                ? "http://schemas.xmlsoap.org/soap/envelope/"
                : faultCode.Namespace;

            var prefix = writer.LookupPrefix(ns);
            if (prefix == null)
            {
                writer.WriteXmlnsAttribute("a", ns);
                writer.WriteString($"a:{name}");
            }
            else
            {
                writer.WriteString($"{prefix}:{name}");
            }
            
            writer.WriteEndElement();

            // ReSharper disable AssignNullToNotNullAttribute
            // ReSharper disable PossibleNullReferenceException
            var translation = ((ICollection<FaultReasonText>) typeof (FaultReason)
                                                              .GetProperty("Translations")
                                                              .GetValue(Reason))
                .First();
            // ReSharper restore PossibleNullReferenceException
            // ReSharper restore AssignNullToNotNullAttribute

            writer.WriteStartElement(WcfBinary.GetString("faultstring"), WcfBinary.GetString(""));
            if (translation.XmlLang.Length > 0)
            {
                writer.WriteAttributeString("xml", "lang", "http://www.w3.org/XML/1998/namespace", translation.XmlLang);
            }

            writer.WriteString(translation.Text);
            writer.WriteEndElement();
            if (Actor.Length > 0)
            {
                writer.WriteElementString(WcfBinary.GetString("faultactor"), WcfBinary.GetString(""), Actor);
            }

            if (HasDetail)
            {
                OnWriteDetail(writer, EnvelopeVersion.Soap11);
            }
            writer.WriteEndElement();
        }

        #endregion private
    }
}
