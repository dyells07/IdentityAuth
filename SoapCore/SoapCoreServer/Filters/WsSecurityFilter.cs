using System;
using System.Security.Authentication;
using System.Security.Cryptography;
using System.ServiceModel.Channels;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;
using SoapCoreServer.Filters.WsSecurity;

namespace SoapCoreServer.Filters
{
    public class WsSecurityFilter : IAsyncFilter
    {
        public WsSecurityFilter(Func<string, Task<string>> funcGetUserPassword,
                                Action<WsSecurityToken> actionAuthenticationFailed = null)
        {
            _funcGetUserPassword = funcGetUserPassword ?? throw new ArgumentNullException(nameof (funcGetUserPassword));
            _actionAuthenticationFailed = actionAuthenticationFailed;
        }

        public async Task OnRequest(Message message)
        {
            var wsToken = GetWsSecurityToken(message);

            if (wsToken.PasswordType == WsSecurityPasswordType.PasswordDigest)
            {
                var created = DateTime.Parse(wsToken.Created);
                if ((DateTime.UtcNow - created).TotalMinutes > MaxTokenTimeInMinutes)
                {
                    throw new InvalidCredentialException("Authentication token was expired!");
                }
            }

            var userPassword = await _funcGetUserPassword(wsToken.Username);

            if (!IsUserPasswordValid(userPassword, wsToken))
            {
                _actionAuthenticationFailed?.Invoke(wsToken);
                throw new InvalidCredentialException("Authentication failed!");
            }
        }

        public Task OnResponse(Message message)
        {
            return Task.CompletedTask;
        }

        private const int MaxTokenTimeInMinutes = 5;
        private readonly Func<string, Task<string>> _funcGetUserPassword;
        private readonly Action<WsSecurityToken> _actionAuthenticationFailed;

        private bool IsUserPasswordValid(string userPassword, WsSecurityToken wsToken)
        {
            if (wsToken.PasswordType == WsSecurityPasswordType.PasswordText)
            {
                return userPassword.Equals(wsToken.Password.Value);
            }

            return wsToken.Password.Value.Equals(CreatePasswordDigest(wsToken, userPassword));
        }

        private static string CreatePasswordDigest(WsSecurityToken wsToken, string originalPassword)
        {
            var nonce = wsToken.Nonce ?? Array.Empty<byte>();
            var created = wsToken.Created != null ? Encoding.UTF8.GetBytes(wsToken.Created) : Array.Empty<byte>();
            var password = originalPassword != null ? Encoding.UTF8.GetBytes(originalPassword) : Array.Empty<byte>();

            var operand = new byte[nonce.Length + created.Length + password.Length];

            Array.Copy(nonce, operand, nonce.Length);
            Array.Copy(created, 0, operand, nonce.Length, created.Length);
            Array.Copy(password, 0, operand, nonce.Length + created.Length, password.Length);

#if NETCORE_31
            var hashedDataBytes = SHA1.Create().ComputeHash(operand);
#endif

#if NET_60_OR_GREATER
            var hashedDataBytes = SHA1.HashData(operand);
#endif

            return Convert.ToBase64String(hashedDataBytes);
        }

        private static WsSecurityToken GetWsSecurityToken(Message message)
        {
            WsSecurityToken wsSecurityToken = null;

            for (var i = 0; i < message.Headers.Count; i++)
            {
                if (message.Headers[i].Name.Equals("Security",
                                                   StringComparison.InvariantCultureIgnoreCase))
                {
                    using var reader = message.Headers.GetReaderAtHeader(i);
                    reader.Read();

                    var serializer = new XmlSerializer(typeof (WsSecurityToken));
                    wsSecurityToken = (WsSecurityToken)serializer.Deserialize(reader);

                    break;
                }
            }

            if (wsSecurityToken == null)
            {
                throw new Exception("WsSecurity header not found!");
            }

            return wsSecurityToken;
        }
    }
}
