using _0Auth.Areas.Identity.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace _0Auth.Data;

public class _0AuthDBContext : IdentityDbContext<_0AuthUser>
{
    public _0AuthDBContext(DbContextOptions<_0AuthDBContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
    }
}
