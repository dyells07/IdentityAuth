using System;
using System.Text;

namespace SoapCoreServer.Encoders
{
    internal class EncoderFactory
    {
        public static IMessageEncoder Create(MessageType messageType, Encoding encoding)
        {
            switch (messageType)
            {
                case MessageType.Text:
                    return new TextMessageEncoder(encoding);
                case MessageType.Binary:
                    return new BinaryMessageEncoder(encoding);
                case MessageType.BinaryGZip:
                    return new GZipMessageEncoder(new BinaryMessageEncoder(encoding));
                case MessageType.BinaryDeflate:
                    return new DeflateMessageEncoder(new BinaryMessageEncoder(encoding));
                case MessageType.StreamText:
                    return new TextMessageEncoder(encoding);
                case MessageType.StreamBinary:
                    return new BinaryMessageEncoder(encoding);
                case MessageType.StreamBinaryGZip:
                    return new GZipMessageEncoder(new BinaryMessageEncoder(encoding));
                case MessageType.StreamBinaryDeflate:
                    return new DeflateMessageEncoder(new BinaryMessageEncoder(encoding));
            }

            throw new Exception("Unsupported message type!");
        }
    }
}
