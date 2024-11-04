using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FirstCRUDApplication.DbEntities
{

    public class CatalogMap
    {
        public CatalogMap(EntityTypeBuilder<Catalog> entityBuilder)
        {
            entityBuilder.HasKey(t => t.Id);
            entityBuilder.Property(t => t.Name).IsRequired();
            entityBuilder.Property(t => t.Genre).IsRequired();
        }
    }
}
