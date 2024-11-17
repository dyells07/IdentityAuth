using System;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Channels;
using System.Xml;
using SoapCoreServer.Descriptions;

namespace SoapCoreServer.BodyWriters
{
    internal class WrappedBodyWriter : BodyWriter
    {
        public WrappedBodyWriter(OperationDataDescription operation,
                                 object body)
            : base(isBuffered: true)
        {
            _operation = operation;
            _body = body;
        }

        protected override void OnWriteBodyContents(XmlDictionaryWriter xmlWriter)
        {
            if (_operation.IsWrapped)
            {
                var ns = _operation.WrapperNamespace ?? _operation.Operation.ContractDescription.Namespace;
                xmlWriter.WriteStartElement(_operation.MessageName, ns);
            }

            var props = _body.GetType()
                             .GetFieldsAndProperties()
                             .Select(x => new
                              {
                                  Name = x.GetCustomAttribute<MessageBodyMemberAttribute>()?.Name ?? x.Name,
                                  Property = x
                              });

            foreach (var prop in props.Where(x => _operation.Body.Any(b => b.Name == x.Name)))
            {
                var value = prop.Property.GetValue(_body);
                Write(prop.Property,
                      xmlWriter,
                      prop.Name,
                      value,
                      _operation.Operation.ContractDescription.ServiceDescription.SoapSerializer);
            }

            if (_operation.IsWrapped)
            {
                xmlWriter.WriteEndElement();
            }
        }

        private readonly OperationDataDescription _operation;
        private readonly object _body;

        private void Write(MemberInfo prop,
                           XmlDictionaryWriter xmlWriter,
                           string name,
                           object value,
                           SoapSerializerType soapSerializer)
        {
            if (value != null &&
                value.GetType().GetCustomAttribute<DataContractAttribute>() == null)
            {
                soapSerializer = SoapSerializerType.XmlSerializer;
            }

            switch (soapSerializer)
            {
                case SoapSerializerType.DataContractSerializer:
                    var dataContractSerializer = XmlSerializersCache.GetDataContractSerializer(
                        prop.GetMemberType(),
                        name,
                        _operation.WrapperNamespace ?? _operation.Operation.ContractDescription.Namespace);

                    dataContractSerializer.WriteObject(xmlWriter, value);
                    break;
                case SoapSerializerType.XmlSerializer:
                    var xmlSerializer = XmlSerializersCache.GetSerializer(
                        prop.GetMemberType(),
                        name,
                        _operation.Operation.ContractDescription.Namespace);
                    xmlSerializer.Serialize(xmlWriter, value);
                    break;
                default:
                    throw new Exception(
                        $"Unknown SoapSerializerType '{_operation.Operation.ContractDescription.ServiceDescription.SoapSerializer}'!");
            }
        }
    }
}
