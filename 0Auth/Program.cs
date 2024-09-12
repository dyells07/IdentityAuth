using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using _0Auth.Data;
using _0Auth.Areas.Identity.Data;
var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("_0AuthDBContextConnection") ?? throw new InvalidOperationException("Connection string '_0AuthDBContextConnection' not found.");

builder.Services.AddDbContext<_0AuthDBContext>(options => options.UseSqlServer(connectionString));

builder.Services.AddDefaultIdentity<_0AuthUser>(options => options.SignIn.RequireConfirmedAccount = true).AddEntityFrameworkStores<_0AuthDBContext>();

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.MapRazorPages();

app.Run();
