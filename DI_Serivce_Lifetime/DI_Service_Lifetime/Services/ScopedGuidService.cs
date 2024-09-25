namespace DI_Serivce_Lifetime.Services
{
    public class ScopedGuidService : IScopedGuidService
    {
        private readonly Guid Id;

        public ScopedGuidService()
        {
            Id = Guid.NewGuid();
        }

        public string GetGuid()
        {
            return Id.ToString();
        }
    }
}
