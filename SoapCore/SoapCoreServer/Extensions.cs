using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.ServiceModel;
using System.Threading.Tasks;

namespace SoapCoreServer
{
    internal static class Extensions
    {
        public static Type GetMemberType(this MemberInfo memberInfo)
        {
            if (memberInfo is PropertyInfo propertyInfo)
            {
                return propertyInfo.PropertyType;
            }

            if (memberInfo is FieldInfo fieldInfo)
            {
                return fieldInfo.FieldType;
            }

            throw new Exception("Supported only PropertyInfo and FieldInfo types!");
        }

        public static MemberInfo[] GetFieldsAndProperties(this Type type)
        {
            return type.GetMembers()
                       .Where(x => x.MemberType == MemberTypes.Property ||
                                   x.MemberType == MemberTypes.Field)
                       .ToArray();
        }

        public static ISet<string> GetShouldSerializeMethods(this Type type)
        {
            return new HashSet<string>(
                type.GetMethods(BindingFlags.Public | BindingFlags.Instance)
                    .Where(x => x.ReturnType == Utils.BoolType &&
                                x.Name.StartsWith("ShouldSerialize"))
                    .Select(x => x.Name));
        }

        public static void SetValue(this MemberInfo memberInfo, object obj, object value)
        {
            if (memberInfo is PropertyInfo propertyInfo)
            {
                propertyInfo.SetValue(obj, value);
                return;
            }

            if (memberInfo is FieldInfo fieldInfo)
            {
                fieldInfo.SetValue(obj, value);
                return;
            }

            throw new Exception("Supported only PropertyInfo and FieldInfo types!");
        }

        public static object GetValue(this MemberInfo memberInfo, object obj)
        {
            if (memberInfo is PropertyInfo propertyInfo)
            {
                return propertyInfo.GetValue(obj);
            }

            if (memberInfo is FieldInfo fieldInfo)
            {
                return fieldInfo.GetValue(obj);
            }

            throw new Exception("Supported only PropertyInfo and FieldInfo types!");
        }

        public static string GetEnvelopeNamespace(this EnvelopeVersion envelopeVersion)
        {
            // ReSharper disable once PossibleNullReferenceException
            return (string)envelopeVersion
                            .GetType()
                            .GetProperty("Namespace",
                                         BindingFlags.NonPublic |
                                         BindingFlags.Instance)
                            .GetValue(envelopeVersion);
        }

        public static bool IsValuableTask(this Type type)
        {
            return type.IsConstructedGenericType &&
                   type.GetGenericTypeDefinition() == typeof(Task<>);
        }

        public static bool IsTask(this Type type)
        {
            return type == typeof(Task);
        }

        public static bool IsVoid(this Type type)
        {
            return type == typeof(void);
        }

        public static bool IsStreamed(this MessageType messageType)
        {
            return messageType == MessageType.StreamText ||
                   messageType == MessageType.StreamBinary ||
                   messageType == MessageType.StreamBinaryGZip ||
                   messageType == MessageType.StreamBinaryDeflate;
        }

        public static bool IsText(this MessageType messageType)
        {
            return messageType == MessageType.Text ||
                   messageType == MessageType.StreamText;
        }
    }
}
