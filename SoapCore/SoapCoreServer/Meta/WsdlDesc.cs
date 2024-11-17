using System.Collections.Generic;

namespace SoapCoreServer.Meta
{
    internal class WsdlDesc
    {
        public WsdlDesc(SoapSerializerType soapSerializer)
        {
            _schemas = new Dictionary<string, SchemaDesc>();
            SoapSerializer = soapSerializer;
        }

        public SchemaDesc GetSchema(string ns)
        {
            if (!_schemas.TryGetValue(ns, out var schema))
            {
                schema = CreateSchema(ns);
            }

            return schema;
        }

        public ICollection<string> AllNs => _schemas.Keys;

        public SoapSerializerType SoapSerializer { get; }

        private readonly IDictionary<string, SchemaDesc> _schemas;

        private SchemaDesc CreateSchema(string ns)
        {
            var schema = new SchemaDesc(ns, this);
            _schemas.Add(schema.Ns, schema);
            return schema;
        }
    }
}
