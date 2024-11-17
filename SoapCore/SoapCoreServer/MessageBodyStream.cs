using System;
using System.IO;
using System.ServiceModel.Channels;
using System.Xml;

namespace SoapCoreServer
{
    internal class MessageBodyStream : Stream
    {
        internal MessageBodyStream(Message message,
                                   string wrapperName,
                                   string wrapperNs,
                                   string elementName,
                                   string elementNs)
        {
            _message = message;
            _position = 0;
            _wrapperName = wrapperName;
            _wrapperNs = wrapperNs;
            _elementName = elementName;
            _elementNs = elementNs;
        }

        public override long Position
        {
            get
            {
                EnsureStreamIsOpen();
                return _position;
            }
            set => throw new NotSupportedException();
        }

        public override bool CanRead => _message.State != MessageState.Closed;
        public override bool CanSeek => false;
        public override bool CanWrite => false;
        public override long Length => throw new NotSupportedException();

        public override int Read(byte[] buffer, int offset, int count)
        {
            EnsureStreamIsOpen();
            if (buffer == null)
            {
                throw new ArgumentNullException(nameof (buffer));
            }
            if (offset < 0)
            {
                throw new ArgumentOutOfRangeException(nameof (offset));
            }
            if (count < 0)
            {
                throw new ArgumentOutOfRangeException(nameof (count));
            }
            if (buffer.Length - offset < count)
            {
                throw new ArgumentException("InvalidStreamOffsetLength");
            }

            if (_reader == null)
            {
                _reader = _message.GetReaderAtBodyContents();
                if (_wrapperName != null)
                {
                    _reader.MoveToContent();
                    _reader.ReadStartElement(_wrapperName, _wrapperNs);
                }

                _reader.MoveToContent();
                if (_reader.NodeType == XmlNodeType.EndElement)
                {
                    return 0;
                }

                _reader.ReadStartElement(_elementName, _elementNs);
            }

            if (_reader.MoveToContent() != XmlNodeType.Text)
            {
                Exhaust(_reader);
                return 0;
            }

            var bytesRead = _reader.ReadContentAsBase64(buffer, offset, count);
            _position += bytesRead;
            if (bytesRead == 0)
            {
                Exhaust(_reader);
            }

            return bytesRead;
        }

        public override void Close()
        {
            _message.Close();
            if (_reader != null)
            {
                _reader.Close();
                _reader = null;
            }
            base.Close();
        }

        public override void Flush()
        {
            throw new NotSupportedException();
        }

        public override long Seek(long offset, SeekOrigin origin)
        {
            throw new NotSupportedException();
        }

        public override void SetLength(long value)
        {
            throw new NotSupportedException();
        }

        public override void Write(byte[] buffer, int offset, int count)
        {
            throw new NotSupportedException();
        }

        private XmlDictionaryReader _reader;
        private long _position;

        private readonly Message _message;
        private readonly string _wrapperName;
        private readonly string _wrapperNs;
        private readonly string _elementName;
        private readonly string _elementNs;

        private void EnsureStreamIsOpen()
        {
            if (_message.State == MessageState.Closed)
            {
                throw new ObjectDisposedException("StreamRequestMessageClosed");
            }
        }

        private static void Exhaust(XmlDictionaryReader reader)
        {
            if (reader == null) return;
            while (reader.Read())
            {
                // drain
            }
        }
    }
}
