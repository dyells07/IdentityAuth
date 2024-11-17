using System;
using System.Text;

namespace SoapCoreServer
{
    public class Endpoint
    {
        public Endpoint(string url, MessageType type)
            : this(url, type, Encoding.UTF8)
        {
        }

        public Endpoint(string url, MessageType type, Encoding encoding)
        {
            if (string.IsNullOrWhiteSpace(url))
            {
                throw new ArgumentNullException(nameof(url));
            }

            if (!url.StartsWith("/"))
            {
                throw  new ArgumentException("Url must start wth '/'!");
            }

            Url = url;
            Type = type;
            Encoding = encoding;
        }

        public string Url { get; }

        public string UnslashedUrl => Url.TrimStart('/');

        public MessageType Type { get; }

        public Encoding Encoding { get; }
    }
}
