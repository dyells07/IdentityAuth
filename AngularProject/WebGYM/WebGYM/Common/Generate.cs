using System;
using System.IO;
using System.Security.Cryptography;
using System.Text;

namespace WebGYM.Common
{
    public static class EncryptionLibrary
    {
        private static readonly byte[] SaltBytes = { 1, 2, 3, 4, 5, 6, 7, 8 };

        public static byte[] AES_Encrypt(byte[] bytesToBeEncrypted, byte[] passwordBytes)
        {
            using (var aes = new RijndaelManaged { KeySize = 256, BlockSize = 128, Mode = CipherMode.CBC })
            {
                var key = new Rfc2898DeriveBytes(passwordBytes, SaltBytes, 1000);
                aes.Key = key.GetBytes(aes.KeySize / 8);
                aes.IV = key.GetBytes(aes.BlockSize / 8);

                using (var ms = new MemoryStream())
                using (var cs = new CryptoStream(ms, aes.CreateEncryptor(), CryptoStreamMode.Write))
                {
                    cs.Write(bytesToBeEncrypted, 0, bytesToBeEncrypted.Length);
                    cs.FlushFinalBlock();
                    return ms.ToArray();
                }
            }
        }

        public static byte[] AES_Decrypt(byte[] bytesToBeDecrypted, byte[] passwordBytes)
        {
            using (var aes = new RijndaelManaged { KeySize = 256, BlockSize = 128, Mode = CipherMode.CBC })
            {
                var key = new Rfc2898DeriveBytes(passwordBytes, SaltBytes, 1000);
                aes.Key = key.GetBytes(aes.KeySize / 8);
                aes.IV = key.GetBytes(aes.BlockSize / 8);

                using (var ms = new MemoryStream())
                using (var cs = new CryptoStream(ms, aes.CreateDecryptor(), CryptoStreamMode.Write))
                {
                    cs.Write(bytesToBeDecrypted, 0, bytesToBeDecrypted.Length);
                    cs.FlushFinalBlock();
                    return ms.ToArray();
                }
            }
        }

        public static string EncryptText(string input, string password)
        {
            if (string.IsNullOrEmpty(input)) throw new ArgumentNullException(nameof(input));
            if (string.IsNullOrEmpty(password)) throw new ArgumentNullException(nameof(password));

            byte[] bytesToBeEncrypted = Encoding.UTF8.GetBytes(input);
            byte[] passwordBytes = SHA256.Create().ComputeHash(Encoding.UTF8.GetBytes(password));

            byte[] bytesEncrypted = AES_Encrypt(bytesToBeEncrypted, passwordBytes);
            return Convert.ToBase64String(bytesEncrypted);
        }

        public static string DecryptText(string input, string password)
        {
            if (string.IsNullOrEmpty(input)) throw new ArgumentNullException(nameof(input));
            if (string.IsNullOrEmpty(password)) throw new ArgumentNullException(nameof(password));

            byte[] bytesToBeDecrypted = Convert.FromBase64String(input);
            byte[] passwordBytes = SHA256.Create().ComputeHash(Encoding.UTF8.GetBytes(password));

            byte[] bytesDecrypted = AES_Decrypt(bytesToBeDecrypted, passwordBytes);
            return Encoding.UTF8.GetString(bytesDecrypted);
        }
    }
}
