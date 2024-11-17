using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.ServiceModel;

namespace SoapCoreServer.Descriptions
{
    internal class ContractDescription
    {
        public ContractDescription(ServiceContractAttribute contractAttribute,
                                   ServiceDescription serviceDescription,
                                   Type contractType)
        {
            ServiceDescription = serviceDescription;
            ContractType = contractType;
            Namespace = contractAttribute.Namespace ?? "http://tempuri.org/";
            Name = contractAttribute.Name ?? contractType.Name;

            var operations = new List<OperationDescription>();
            var typeInfo = ContractType.GetTypeInfo();

            var methods = typeInfo.DeclaredMethods
                                  .ToArray();

            var groups = methods.GroupBy(x => x.Name)
                                .Where(x => x.Count() > 1)
                                .ToArray();

            if (groups.Length > 0)
            {
                var names = groups.Select(x => x.Key)
                                  .ToArray();
                throw new Exception($"Service must not contain methods with same name: {string.Join(", ", names)}");
            }

            foreach (var methodInfo in methods)
            {
                var operationContracts = methodInfo.GetCustomAttributes<OperationContractAttribute>();

                operations.AddRange(operationContracts.Select(x => new OperationDescription(x, this, methodInfo)));
            }

            OperationDescriptions = operations;
        }

        public string Name { get; }

        public string Namespace { get; }

        public Type ContractType { get; }

        public ServiceDescription ServiceDescription { get; }

        public IReadOnlyList<OperationDescription> OperationDescriptions { get; }
    }
}
