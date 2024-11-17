using System;
using SoapCoreServer.Meta;

namespace SoapCoreServer.Descriptions
{
    public class OperationMemberDescription
    {
        public OperationMemberDescription(Type type,
                                          string name,
                                          string ns,
                                          int? order = null,
                                          bool header = false,
                                          bool isNullable = false,
                                          string dataType = null,
                                          ArrayType arrayType = ArrayType.None)
        {
            Type = type;
            Name = name;
            Ns = ns;
            Order = order;
            Header = header;
            IsNullable = isNullable;
            DataType = dataType;
            ArrayType = arrayType;
        }

        public bool Header { get; }

        public string Ns { get; }

        public int? Order { get; }

        public Type Type { get; }

        public string Name { get; }

        public bool IsNullable { get; }

        public string DataType { get; }

        public ArrayType ArrayType { get; }
    }
}
