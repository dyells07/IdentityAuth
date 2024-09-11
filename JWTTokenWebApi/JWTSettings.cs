namespace JWTTokenWebApi
{
    public class JWTSettings
    {
        public string SecretKey { get; set; }
        public string Issuer { get; set; }
        public string Audience { get; set; }
        public int ExpiryMinutes { get; set; }
        public char[] Secret { get; internal set; }
    }
}

