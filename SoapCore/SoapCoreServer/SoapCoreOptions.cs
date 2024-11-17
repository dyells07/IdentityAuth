using System;
using System.Collections.Generic;
using SoapCoreServer.Filters;

namespace SoapCoreServer
{
    public class SoapCoreOptions
    {
        public string BasePath { get; private set; }

        public SoapSerializerType SerializerType { get; private set; } = SoapSerializerType.DataContractSerializer;

        public IReadOnlyCollection<Endpoint> Endpoints => _endpoints;

        public IReadOnlyCollection<Type> Filters => _filters;

        public SoapCoreOptions SetBasePath(string basePath)
        {
            Utils.ValidateBasePath(basePath);
            BasePath = basePath;

            return this;
        }

        public SoapCoreOptions SetSoapSerializer(SoapSerializerType serializerType)
        {
            SerializerType = serializerType;

            return this;
        }

        public SoapCoreOptions AddEndpoint(Endpoint endpoint)
        {
            if (endpoint == null)
            {
                throw new ArgumentNullException(nameof (endpoint));
            }

            _endpoints.Add(endpoint);

            return this;
        }

        public SoapCoreOptions AddFilter<TFilter>()
            where TFilter : IAsyncFilter
        {
            _filters.Add(typeof (TFilter));

            return this;
        }

        private readonly List<Endpoint> _endpoints = new();
        private readonly List<Type> _filters = new();
    }
}
