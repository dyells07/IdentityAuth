using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FirstCRUDApplication.DbEntities
{

    public class GenreMap
    {
        public GenreMap(EntityTypeBuilder<Genre> entityBuilder)
        {
            entityBuilder.HasKey(t => t.Id);
            entityBuilder.Property(t => t.Name).IsRequired();
        }
    }
}
