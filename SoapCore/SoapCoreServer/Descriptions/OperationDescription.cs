using System;
using System.IO;
using System.Reflection;
using System.ServiceModel;

namespace SoapCoreServer.Descriptions
{
    internal class OperationDescription
    {
        public OperationDescription(OperationContractAttribute contractAttribute,
                                    ContractDescription contractDescription,
                                    MethodInfo methodInfo)
        {
            ContractDescription = contractDescription;
            Name = contractAttribute.Name ?? methodInfo.Name;
            SoapAction = contractAttribute.Action ??
                         $"{contractDescription.Namespace.TrimEnd('/')}/{contractDescription.Name}/{Name}";
            IsOneWay = contractAttribute.IsOneWay;
            ReplyAction = contractAttribute.ReplyAction ??
                          $"{contractDescription.Namespace.TrimEnd('/')}/{contractDescription.Name}/{Name}Response";
            DispatchMethod = methodInfo;

            Request = CreateRequest();
            Response = CreateResponse();
        }

        public ContractDescription ContractDescription { get; }

        public MethodInfo DispatchMethod { get; }

        public string SoapAction { get; }

        public string ReplyAction { get; }

        public string Name { get; }

        public bool IsOneWay { get; }

        public bool IsEmptyRequest => Request?.Type == null;

        public bool IsStreamRequest => !IsEmptyRequest && Request?.Type == typeof(Stream);

        public OperationDataDescription Request { get; }

        public OperationDataDescription Response { get; }

        private OperationDataDescription CreateRequest()
        {
            var methodParameters = DispatchMethod.GetParameters();
            if (methodParameters.Length > 1)
            {
                throw new Exception(
                    $"Method {ContractDescription.Name}.{DispatchMethod.Name} contains more then one parameter!");
            }

            return methodParameters.Length == 0
                ? OperationDataDescription.CreateEmptyInputMessage(ContractDescription.Name, Name, this)
                : OperationDataDescription.Create(methodParameters[0], this);
        }

        private OperationDataDescription CreateResponse()
        {
            var returnType = DispatchMethod.ReturnType;

            if (returnType.IsVoid() || returnType.IsTask())
            {
                return IsOneWay
                    ? null
                    : OperationDataDescription.CreateEmptyOutputMessage(DispatchMethod.Name, this);
            }

            if (IsOneWay)
            {
                throw new Exception(
                    $"Method {ContractDescription.Name}.{DispatchMethod.Name} marked as IsOneWay=true!");
            }

            return OperationDataDescription.Create(returnType, this);
        }
    }
}
