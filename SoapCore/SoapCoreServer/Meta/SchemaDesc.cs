using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Xml.Serialization;
using SoapCoreServer.Descriptions;

namespace SoapCoreServer.Meta
{
    internal class SchemaDesc
    {
        public SchemaDesc(string ns, WsdlDesc wsdlDesc)
        {
            if (string.IsNullOrWhiteSpace(ns))
            {
                throw new ArgumentNullException(nameof(ns));
            }

            Ns = ns;
            WsdlDesc = wsdlDesc ?? throw new ArgumentNullException(nameof(wsdlDesc));

            Elements = new Dictionary<Type, ElementDesc>();
            Enums = new List<Type>();
            ComplexTypes = new Dictionary<Type, ElementDesc>();
        }

        public IDictionary<Type, ElementDesc> Elements { get; }

        public WsdlDesc WsdlDesc { get; }

        public string Ns { get; }

        public IList<Type> Enums { get; }

        public IDictionary<Type, ElementDesc> ComplexTypes { get; }

        public bool HasStream => Elements.ContainsKey(Utils.StreamType);

        public string[] ImportNs => ComplexTypes.Values
                                                .SelectMany(x => x.Children)
                                                .Where(x => x.Ns != Ns && x.Ns != DataContractNs)
                                                .Select(x => x.Ns)
                                                .Distinct()
                                                .ToArray();

        public bool HasSerializationTypes => ComplexTypes.Any(
            x => x.Value
                  .Children
                  .Any(y => y.Type == typeof(Guid) || y.Type == typeof(Guid?)));

        public void AddMethod(OperationDataDescription operation)
        {
            var elem = ElementDesc.CreateRoot(this,
                                              operation.MessageName,
                                              operation.WrapperNamespace ?? Ns,
                                              operation.Type,
                                              operation.AllMembers);

            if (operation.IsWrapped)
            {
                AddElement(elem);
            }
            else
            {
                if (elem.Children.Length > 1)
                {
                    throw new Exception($"Wrong IsWrapped attribute value on type {operation.Type.FullName}!");
                }
            }

            Array.ForEach(elem.Children, ScanElement);
        }

        public void AddStreamMethod(OperationDescription operation)
        {
            var elem = ElementDesc.CreateRoot(this,
                                              operation.Name,
                                              operation.ContractDescription.Namespace,
                                              operation.Request.Type,
                                              new[]
                                              {
                                                  new OperationMemberDescription(operation.Request.Type,
                                                                                 operation.Request.MessageName,
                                                                                 Utils.StreamNs)
                                              });
            AddElement(elem);

            if (operation.IsOneWay) return;

            var elemResponse = ElementDesc.CreateEmptyRoot(this,
                                                           operation.Response.MessageName,
                                                           operation.ContractDescription.Namespace);
            AddElement(elemResponse);
        }

        #region private

        private const string DataContractNs = "http://schemas.datacontract.org/2004/07/System";

        private bool ContainsElement(Type type, string ns = null)
        {
            ns ??= Utils.GetNsByType(type, WsdlDesc.SoapSerializer);
            return WsdlDesc.GetSchema(ns).Elements.ContainsKey(type);
        }

        private void AddEnum(Type type, string ns = null)
        {
            ns ??= Utils.GetNsByType(type, WsdlDesc.SoapSerializer);
            var schema = WsdlDesc.GetSchema(ns);
            if (!schema.Enums.Contains(type))
            {
                schema.Enums.Add(type);
            }
        }

        private void AddComplexType(ElementDesc elem)
        {
            var ns = elem.Ns ?? Utils.GetNsByType(elem.Type, WsdlDesc.SoapSerializer);
            var schema = WsdlDesc.GetSchema(ns);

            if (!schema.ComplexTypes.ContainsKey(elem.Type))
            {
                schema.ComplexTypes.Add(elem.Type, elem);
            }
        }

        private ElementDesc AddElement(ElementDesc elem)
        {
            var ns = elem.Ns ?? Utils.GetNsByType(elem.Type, WsdlDesc.SoapSerializer);
            var schema = WsdlDesc.GetSchema(ns);

            if (!schema.Elements.TryGetValue(elem.Type, out var element) ||
                !element.Name.Equals(elem.Name, StringComparison.Ordinal))
            {
                schema.Elements.Add(elem.Type, elem);
            }

            return elem;
        }

        //  [DebuggerHidden]
        private void ScanElement(ElementDesc elem)
        {
            if (ContainsElement(elem.Type, elem.Ns)) return;

            if (elem.Type.IsValueType || elem.Type == Utils.StringType)
            {
                if (elem.Type.IsEnum)
                {
                    AddElement(ElementDesc.Create(this, elem.TypeName, elem.Ns, elem.Type, elem.ArrayType, nullable: elem.Nullable));
                    AddEnum(elem.Type, elem.Ns);
                }
            }
            else
            {
                var (type, isArray) = Utils.GetFilteredPropertyType(elem.Type);
                if (isArray && !elem.IsChoice)
                {
                    if (type == typeof(byte)) return;

                    var arrayElement = AddElement(
                        ElementDesc.Create(this, elem.TypeName, elem.Ns, elem.Type, elem.ArrayType, elem.TypeName));

                    if (elem.ArrayType == ArrayType.Separated)
                    {
                        AddComplexType(arrayElement);
                    }

                    var name = Utils.GetTypeName(type, WsdlDesc.SoapSerializer);

                    var itemElement = ElementDesc.Create(this,
                                                         name,
                                                         Utils.GetNsByType(type, WsdlDesc.SoapSerializer, elem.Ns),
                                                         type,
                                                         ArrayType.None,
                                                         name);

                    arrayElement.SetChildren(new[] { itemElement });

                    if (!ContainsElement(type, elem.Ns))
                    {
                        if (IsComplexType(type))
                        {
                            var element = ElementDesc.Create(this,
                                                             itemElement.TypeName,
                                                             itemElement.Ns,
                                                             itemElement.Type,
                                                             itemElement.ArrayType,
                                                             itemElement.TypeName);

                            ScanElement(element);
                        }

                        if (type.IsEnum)
                        {
                            AddEnum(type, itemElement.Ns);
                        }
                    }

                    return;
                }

                if (IsComplexType(type) && !elem.IsChoice)
                {
                    AddElement(elem.Clone());
                    AddComplexType(elem);
                }

                var baseType = Utils.GetFilteredPropertyType(elem.Type).type.BaseType;
                var inherited = baseType != null && baseType != typeof(object);

                if (inherited && !ContainsElement(baseType))
                {
                    var baseElement = ElementDesc.Create(this,
                                                         Utils.GetTypeName(baseType, WsdlDesc.SoapSerializer),
                                                         Utils.GetNsByType(baseType, WsdlDesc.SoapSerializer, elem.Ns),
                                                         baseType,
                                                         ArrayType.None);

                    ScanElement(baseElement);
                }

                if (!elem.IsChoice)
                {
                    var allProperties = elem.Type.GetFieldsAndProperties();
                    var shouldSerialize = elem.Type.GetShouldSerializeMethods();

                    var properties = allProperties
                                    // filter inherited fields and properties
                                    .Where(x => x.DeclaringType == elem.Type)
                                    // filter marked by XmlIgnore
                                    .Where(x => x.GetCustomAttribute<XmlIgnoreAttribute>() == null)
                                    .Select((x, i) => new
                                    {
                                        Info = Utils.GetMemberInfo(x, WsdlDesc.SoapSerializer),
                                        Name = x.Name,
                                        Type = x.GetMemberType(),
                                        Order = i,
                                        HasSpecified = allProperties.Any(p => p.Name.Equals($"{x.Name}Specified") &&
                                                                              p.GetCustomAttribute<XmlIgnoreAttribute>() != null)
                                    })
                                    .OrderBy(x => x.Info.Order <= 0 ? x.Order : x.Info.Order)
                                    .ThenBy(x => x.Name)
                                    .Select(x =>
                                    {
                                        var element = ElementDesc.Create(this,
                                                                         x.Info.Name,
                                                                         Utils.GetNsByType(x.Type, WsdlDesc.SoapSerializer, elem.Ns),
                                                                         x.Type,
                                                                         x.Info.ArrayType,
                                                                         required: !shouldSerialize.Contains($"ShouldSerialize{x.Name}") &&
                                                                           !x.HasSpecified &&
                                                                           (x.Info.Required || x.Type.IsValueType) &&
                                                                           !x.Info.Nullable,
                                                                         nullable: x.Info.Nullable,
                                                                         emitDefaultValue: x.Info.EmitDefaultValue,
                                                                         dataType: x.Info.DataType);

                                        if (x.Info.IsChoice)
                                        {
                                            element.SetIsChoice()
                                                   .SetChildren(
                                                        x.Info.Items.Select(
                                                              y =>
                                                              {
                                                                  var ns = y.Ns ?? Utils.GetNsByType(y.Type, WsdlDesc.SoapSerializer, element.Ns);
                                                                  return ElementDesc.Create(this, y.Name, ns, y.Type, x.Info.ArrayType, dataType: y.DataType);
                                                              })
                                                         .ToArray());
                                        }

                                        return element;
                                    })
                                    .ToArray();

                    elem.SetChildren(properties);
                }

                Array.ForEach(elem.Children, ScanElement);
            }
        }

        private static bool IsComplexType(Type type)
        {
            return !(type.IsValueType || type == Utils.StringType);
        }

        #endregion private
    }
}
