using System;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Channels;
using System.Threading.Tasks;
using System.Xml;
using Castle.DynamicProxy;
using SoapCoreServer.Descriptions;

namespace SoapCoreServer.Client
{
    internal class ResponseHelper
    {
        public static void FillResponse(IInvocation invocation,
                                        Message responseMessage,
                                        OperationDescription operation)
        {
            if (responseMessage.IsFault)
            {
                var messageFault = MessageFault.CreateFault(responseMessage, 0x10000);

                throw new FaultException(messageFault, operation.SoapAction);
            }

            if (invocation.Method.ReturnType.IsVoid() || invocation.Method.ReturnType.IsTask())
            {
                return;
            }

            var isValueTask = invocation.Method.ReturnType.IsValuableTask();

            var responseRoot = Activator.CreateInstance(isValueTask
                                                            ? invocation.Method.ReturnType.GetGenericArguments()[0]
                                                            : invocation.Method.ReturnType);

            FillHeaders(responseMessage, responseRoot, operation);
            FillBody(responseMessage, responseRoot, operation);

            invocation.ReturnValue = isValueTask
                ? Task.FromResult((dynamic)responseRoot)
                : responseRoot;
        }

        private static void FillHeaders(Message responseMessage,
                                        object response,
                                        OperationDescription operationDescription)
        {
            var properties = response.GetType()
                                     .GetFieldsAndProperties();

            foreach (var property in properties)
            {
                var header = operationDescription.Response
                                                 .Headers
                                                 .FirstOrDefault(x => x.Name == property.Name &&
                                                                      x.Type == property.GetMemberType());
                if (header == null) continue;

                var index = responseMessage.Headers.FindHeader(header.Name, header.Ns);
                using var xmlReader = responseMessage.Headers.GetReaderAtHeader(index);

                var headerBody = Deserialize(xmlReader,
                                             operationDescription.ContractDescription
                                                                 .ServiceDescription
                                                                 .SoapSerializer,
                                             header.Type,
                                             header.Name,
                                             header.Ns);

                property.SetValue(response, headerBody);
            }
        }

        private static void FillBody(Message responseMessage,
                                     object request,
                                     OperationDescription operationDescription)
        {
            if (operationDescription.Response.IsWrapped)
            {
                using var xmlReader = responseMessage.GetReaderAtBodyContents();

                var responseBody = Deserialize(xmlReader,
                                               operationDescription.ContractDescription
                                                                   .ServiceDescription
                                                                   .SoapSerializer,
                                               operationDescription.Response.Type,
                                               operationDescription.Response.MessageName,
                                               operationDescription.ContractDescription.Namespace);

                var properties = operationDescription.Response.Type.GetFieldsAndProperties();

                foreach (var property in properties)
                {
                    var item = operationDescription.Response
                                                   .Body
                                                   .FirstOrDefault(x => x.Name == property.Name &&
                                                                        x.Type == property.GetMemberType());
                    if (item == null) continue;

                    property.SetValue(request,
                                      property.GetValue(responseBody));
                }
            }
            else
            {
                var firstProperty = request.GetType()
                                           .GetFieldsAndProperties()
                                           .FirstOrDefault(x => x.GetCustomAttribute<MessageHeaderAttribute>() == null);

                if (firstProperty == null) return;

                using var xmlReader = responseMessage.GetReaderAtBodyContents();

                var responseBody = Deserialize(xmlReader,
                                              operationDescription.ContractDescription
                                                                  .ServiceDescription
                                                                  .SoapSerializer,
                                              firstProperty.GetMemberType(),
                                              operationDescription.Response.MessageName,
                                              operationDescription.ContractDescription.Namespace);

                firstProperty.SetValue(request, responseBody);
            }
        }

        private static object Deserialize(XmlDictionaryReader xmlReader,
                                          SoapSerializerType soapSerializer,
                                          Type type,
                                          string messageName,
                                          string ns)
        {
            if (type.GetCustomAttribute<DataContractAttribute>() == null)
            {
                soapSerializer = SoapSerializerType.XmlSerializer;
            }

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
