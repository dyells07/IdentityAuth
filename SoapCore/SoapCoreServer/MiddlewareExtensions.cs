using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;

namespace SoapCoreServer
{
    public static class SoapEndpointExtensions
    {
        public static IApplicationBuilder UseSoapEndpoint<T>(this IApplicationBuilder builder,
                                                             SoapCoreOptions options)
        {
            if (options.Endpoints == null || options.Endpoints.Count == 0)
            {
                throw new ArgumentException("Endpoints not set!");
            }

            return builder.UseMiddleware<SoapEndpointMiddleware>(typeof (T), options);
        }

        public static IServiceCollection AddSoapExceptionTransformer(this IServiceCollection serviceCollection,
                                                                     Func<Exception, string> transformer)
        {
            serviceCollection.TryAddSingleton(new ExceptionTransformer(transformer));
            return serviceCollection;
        }
    }
}
