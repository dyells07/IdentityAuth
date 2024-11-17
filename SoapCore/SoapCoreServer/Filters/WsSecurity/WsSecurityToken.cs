using System;
using System.Xml.Serialization;

namespace SoapCoreServer.Filters.WsSecurity
{
    [XmlRoot("UsernameToken", Namespace = SoapNamespaces.Wss)]
    public class WsSecurityToken
    {
        [XmlAttribute("Id")]
        public string Id { get; set; }

        [XmlElement("Username")]
        public string Username { get; set; }

        [XmlElement("Password")]
        public PasswordString Password { get; set; }

        [XmlElement("Nonce", DataType = "base64Binary")]
        public byte[] Nonce { get; set; }

        [XmlElement("Created", Namespace = SoapNamespaces.Wsu)]
        public string Created { get; set; }

        [XmlIgnore]
        public WsSecurityPasswordType PasswordType
        {
            get
            {
                if (string.IsNullOrWhiteSpace(Password.Type) || Password.Type.Equals(PasswordTextType))
                {
                    return WsSecurityPasswordType.PasswordText;
                }

                if (Password.Type.Equals(PasswordDigestType))
                {
                    return WsSecurityPasswordType.PasswordDigest;
                }

                throw new Exception($"Unknown password type '{Password.Type}'");
            }
        }

        public class PasswordString
        {
            [XmlText]
            public string Value { get; set; }

            [XmlAttribute("Type")]
            public string Type { get; set; }
        }

        private const string PasswordDigestType = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordDigest";
        private const string PasswordTextType = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText";
    }
}
