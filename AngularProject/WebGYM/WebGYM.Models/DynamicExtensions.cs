using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Dynamic;

namespace WebGYM.Models
{
    public static class DynamicExtensions
    {
        public static dynamic ToDynamic(this object value)
        {
            if (value == null)
                throw new ArgumentNullException(nameof(value));

            var expando = new ExpandoObject() as IDictionary<string, object>;

            foreach (PropertyDescriptor property in TypeDescriptor.GetProperties(value))
            {
                expando[property.Name] = property.GetValue(value);
            }

            return expando;
        }
    }
}
