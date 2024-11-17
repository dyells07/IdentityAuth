using Castle.DynamicProxy;

namespace SoapCoreServer.Client
{
    public static class SoapClientFactory
    {
        public static T Create<T>(string serviceUrl) where T : class
        {
            return Create<T>(SoapClientOptions.Create(serviceUrl));
        }

        public static T Create<T>(SoapClientOptions options) where T : class
        {
            var generator = new ProxyGenerator();
            var proxy = generator.CreateInterfaceProxyWithoutTarget<T>(new SoapInterceptor<T>(options));
            return proxy;
        }
    }
}
