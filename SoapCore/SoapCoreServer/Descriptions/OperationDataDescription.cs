using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.ServiceModel;
using SoapCoreServer.Meta;

namespace SoapCoreServer.Descriptions
{
    internal class OperationDataDescription
    {
        public static OperationDataDescription Create(ParameterInfo parameter,
                                                      OperationDescription operation)
        {
            if (parameter.ParameterType == typeof(Stream))
            {
                return CreateByStream(parameter, operation);
            }

            var desc = CreateByAttribute(parameter.ParameterType, operation);
            if (desc != null)
            {
                desc.MessageName ??= parameter.ParameterType.Name;
            }

            return desc;
        }

        public static OperationDataDescription Create(Type returnType,
                                                      OperationDescription operation)
        {
            var type = returnType.IsValuableTask()
                ? returnType.GetGenericArguments().First()
                : returnType;

            var desc = CreateByAttribute(type, operation) ?? new OperationDataDescription();
            desc.MessageName ??= type.Name;

            return desc;
        }

        public static OperationDataDescription CreateEmptyInputMessage(string contractName,
                                                                       string methodName,
                                                                       OperationDescription operation)
        {
            return new OperationDataDescription
            {
                MessageName = $"{contractName}_{methodName}_InputMessage",
                Body = Array.Empty<OperationMemberDescription>(),
                Headers = Array.Empty<OperationMemberDescription>(),
                Operation = operation
            };
        }

        public static OperationDataDescription CreateEmptyOutputMessage(string methodName,
                                                                        OperationDescription operation)
        {
            return new OperationDataDescription
            {
                MessageName = $"{methodName}Response",
                Body = Array.Empty<OperationMemberDescription>(),
                Headers = Array.Empty<OperationMemberDescription>(),
                Operation = operation
            };
        }

        public OperationDescription Operation { get; private set; }

        public Type Type { get; private set; }

        public string WrapperNamespace { get; private set; }

        public bool IsWrapped { get; private set; } = true;

        public OperationMemberDescription[] Body { get; private set; }

        public OperationMemberDescription[] Headers { get; private set; }

        public OperationMemberDescription[] AllMembers => Headers.Union(Body).ToArray();

        public string MessageName
        {
            get => IsWrapped ? _messageName : Body.Single().Name;
            private set => _messageName = value;
        }

        private string _messageName;

        private static OperationDataDescription CreateByAttribute(Type type,
                                                                  OperationDescription operation)
        {
            if (type.GetCustomAttribute(typeof(MessageContractAttribute)) is not MessageContractAttribute attr)
            {
                return null;
            }

            var properties = type.GetFieldsAndProperties();

            return new OperationDataDescription
            {
                Operation = operation,
                MessageName = attr.WrapperName,
                WrapperNamespace = attr.WrapperNamespace,
                IsWrapped = attr.IsWrapped,
                Body = GetMessageBody(properties, operation),
                Headers = GetMessageHeaders(properties),
                Type = type
            };
        }

        private static OperationDataDescription CreateByStream(ParameterInfo parameter,
                                                               OperationDescription operation)
        {
            return new OperationDataDescription
            {
                Operation = operation,
                MessageName = parameter.Name,
                WrapperNamespace = null,
                Body = GetMessageBody(null, operation),
                Headers = GetMessageHeaders(null),
                Type = parameter.ParameterType
            };
        }

        private static OperationMemberDescription[] GetMessageBody(MemberInfo[] properties,
                                                                   OperationDescription operation)
        {
            if (properties == null || properties.Length == 0)
            {
                return Array.Empty<OperationMemberDescription>();
            }

            var infos = GetAttributesInfo<MessageBodyMemberAttribute>(properties);
            if (infos.Length == 0) return Array.Empty<OperationMemberDescription>();

            return infos
                   .OrderBy(x => x.attr.Order)
                   .ThenBy(x => x.attr.Name ?? x.prop.Name)
                   .Select(info =>
                   {
                       var arrayType = Utils.GetMemberInfo(info.prop,
                                                           operation.ContractDescription.ServiceDescription
                                                                    .SoapSerializer)
                                            ?.ArrayType ?? ArrayType.None;

                       return new OperationMemberDescription(
                           type: info.prop.GetMemberType(),
                           name: info.attr.Name ?? info.prop.Name,
                           ns: info.attr.Namespace,
                           order: info.attr.Order,
                           arrayType: arrayType);
                   })
                   .ToArray();
        }

        private static OperationMemberDescription[] GetMessageHeaders(MemberInfo[] properties)
        {
            if (properties == null || properties.Length == 0)
            {
                return Array.Empty<OperationMemberDescription>();
            }

            var infos = GetAttributesInfo<MessageHeaderAttribute>(properties);
            if (infos.Length == 0) return Array.Empty<OperationMemberDescription>();

            return infos.Select(x => new OperationMemberDescription(type: x.prop.GetMemberType(),
                                                                    name: x.attr.Name ?? x.prop.Name,
                                                                    ns: x.attr.Namespace,
                                                                    header: true))
                        .ToArray();
        }

        private static (TAttribute attr, MemberInfo prop)[] GetAttributesInfo<TAttribute>(MemberInfo[] properties)
            where TAttribute : MessageContractMemberAttribute
        {
            return properties
                   .Select(x =>
                               (attr: x.GetCustomAttribute(typeof(TAttribute)) as TAttribute,
                                prop: x))
                   .Where(x => x.attr != null)
                   .ToArray();
        }
    }
}
