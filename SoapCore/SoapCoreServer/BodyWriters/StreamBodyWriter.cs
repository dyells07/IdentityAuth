using System.IO;
using System.ServiceModel.Channels;
using System.Xml;

namespace SoapCoreServer.BodyWriters
{
    internal class StreamBodyWriter : BodyWriter
    {
        public StreamBodyWriter(string serviceNamespace,
                                string bodyName,
                                string argumentName,
                                Stream stream)
            : base(isBuffered: false)
        {
            _serviceNamespace = serviceNamespace;
            _bodyName = bodyName;
            _argumentName = argumentName;
            _stream = stream;
        }

        protected override void OnWriteBodyContents(XmlDictionaryWriter xmlWriter)
        {
            var buffer = new byte[128 * 1024];
            int read;

            xmlWriter.WriteStartElement(_bodyName, _serviceNamespace);
            xmlWriter.WriteStartElement(_argumentName, _serviceNamespace);

            while ((read = _stream.Read(buffer, 0, buffer.Length)) > 0)
            {
                xmlWriter.WriteBase64(buffer, 0, read);
            }

            xmlWriter.WriteEndElement();
            xmlWriter.WriteEndElement();
        }

        private readonly string _serviceNamespace;
        private readonly string _bodyName;
        private readonly string _argumentName;
        private readonly Stream _stream;
    }
}
