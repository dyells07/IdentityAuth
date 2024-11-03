using Microsoft.EntityFrameworkCore;
using FirstCRUDApplication.DbEntities;

namespace FirstCRUDApplication.DbEntities
{
    public class CRUDContext:DbContext
    {
        public CRUDContext(DbContextOptions<CRUDContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            new BookMap(modelBuilder.Entity<Book>());
        }
        public DbSet<FirstCRUDApplication.DbEntities.Catalog> Catalog { get; set; }
    }
}
