using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel.Channels;
using System.Xml;
using SoapCoreServer.Descriptions;

namespace SoapCoreServer
{
    internal class RequestHelper
    {
        public static object[] GetRequestArguments(Message requestMessage,
                                                   OperationDescription operationDescription)
        {
            var parameters = operationDescription.DispatchMethod.GetParameters();

            var requestRoot = Activator.CreateInstance(parameters[0].ParameterType);

            FillHeaders(requestMessage, operationDescription, requestRoot);
            FillBody(requestMessage, operationDescription, requestRoot);

            var arguments = new List<object> { requestRoot };

            return arguments.ToArray();
        }

        private static void FillHeaders(Message requestMessage,
                                        OperationDescription operationDescription,
                                        object request)
        {
            var properties = request.GetType()
                                    .GetFieldsAndProperties();

            foreach (var property in properties)
            {
                var header = operationDescription.Request
                                                 .Headers
                                                 .FirstOrDefault(x => x.Name == property.Name &&
                                                                      x.Type == property.GetMemberType());
                if (header == null) continue;

                var index = requestMessage.Headers.FindHeader(header.Name, header.Ns);
                using var xmlReader = requestMessage.Headers.GetReaderAtHeader(index);

                var headerBody = Deserialize(xmlReader,
                                             operationDescription.ContractDescription.ServiceDescription.SoapSerializer,
                                             header.Type,
                                             header.Name,
                                             header.Ns);

                property.SetValue(request, headerBody);
            }
        }

        private static void FillBody(Message requestMessage,
                                     OperationDescription operationDescription,
                                     object request)
        {
            if (operationDescription.Request.IsWrapped)
            {
                using var xmlReader = requestMessage.GetReaderAtBodyContents();

                var requestBody = Deserialize(xmlReader,
                                              operationDescription.ContractDescription
                                                                  .ServiceDescription
                                                                  .SoapSerializer,
                                              operationDescription.Request.Type,
                                              operationDescription.Request.MessageName,
                                              operationDescription.ContractDescription.Namespace);

                var properties = operationDescription.Request.Type.GetFieldsAndProperties();

                foreach (var property in properties)
                {
                    var item = operationDescription.Request
                                                   .Body
                                                   .FirstOrDefault(x => x.Name == property.Name &&
                                                                        x.Type == property.GetMemberType());
                    if (item == null) continue;

                    property.SetValue(request,
                                      property.GetValue(requestBody));
                }
            }
            else
            {
                var firstProperty = request.GetType()
                                           .GetFieldsAndProperties()
                                           .FirstOrDefault();

                if (firstProperty == null) return;

                using var xmlReader = requestMessage.GetReaderAtBodyContents();

                var requestBody = Deserialize(xmlReader,
                                              operationDescription.ContractDescription
                                                                  .ServiceDescription
                                                                  .SoapSerializer,
                                              firstProperty.GetMemberType(),
                                              operationDescription.Request.MessageName,
                                              operationDescription.ContractDescription.Namespace);

                firstProperty.SetValue(request, requestBody);
            }
        }

        private static object Deserialize(XmlDictionaryReader xmlReader,
                                          SoapSerializerType soapSerializer,
                                          Type type,
                                          string messageName,
                                          string ns)
        {
            switch (soapSerializer)
            {
                case SoapSerializerType.DataContractSerializer:
                    var dataContractSerializer = XmlSerializersCache.GetDataContractSerializer(type, messageName, ns);
                    return dataContractSerializer.ReadObject(xmlReader);
                case SoapSerializerType.XmlSerializer:
                    var xmlSerializer = XmlSerializersCache.GetSerializer(type,
                                                                          messageName,
                                                                          ns);
                    return xmlSerializer.Deserialize(xmlReader);
                default:
                    throw new Exception($"Unknown SoapSerializerType '{soapSerializer}'!");
            }
        }
    }
}
