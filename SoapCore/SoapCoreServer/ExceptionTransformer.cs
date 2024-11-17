using System;

namespace SoapCoreServer
{
    internal class ExceptionTransformer
    {
        public ExceptionTransformer(Func<Exception, string> transformer)
        {
            _transformer = transformer ?? throw new ArgumentNullException(nameof(transformer));
        }

        public string Transform(Exception ex)
        {
            return _transformer(ex);
        }

        private readonly Func<Exception, string> _transformer;
    }
}
