using System;
using System.ServiceModel.Channels;
using System.Xml;

namespace SoapCoreServer.Client
{
    internal class DataHeader : MessageHeader
    {
        public DataHeader(string name, string ns, object data)
        {
            Name = name ?? throw new ArgumentNullException(nameof (name));
            Namespace = ns ?? throw new ArgumentNullException(nameof (ns));
            _data = data;
        }

        public override string Name { get; }

        public override string Namespace { get; }

        private readonly object _data;

        protected override void OnWriteHeaderContents(XmlDictionaryWriter writer, MessageVersion messageVersion)
        {
            var props = _data.GetType()
                             .GetFieldsAndProperties();

            foreach (var prop in props)
            {
                var value = prop.GetValue(_data);

                var serializer = XmlSerializersCache.GetDataContractSerializer(prop.GetMemberType(), prop.Name, Namespace);
                serializer.WriteObject(writer, value);
            }
        }
    }
}
