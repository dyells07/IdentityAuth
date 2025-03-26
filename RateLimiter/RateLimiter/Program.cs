using Microsoft.AspNetCore.RateLimiting;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddRateLimiter(static config =>
{
    // Fixed Window Limiter
    config.AddFixedWindowLimiter("FixedWindowPolicy", static options =>
    {
        options.Window = TimeSpan.FromSeconds(10);
        options.PermitLimit = 3;
        options.QueueLimit = 2;
        options.QueueProcessingOrder = System.Threading.RateLimiting.QueueProcessingOrder.OldestFirst;
       
    });

    // Sliding Window Limiter
    config.AddSlidingWindowLimiter("SlidingWindowPolicy", static options =>
    {
        options.Window = TimeSpan.FromSeconds(15);
        options.PermitLimit = 3;
        options.QueueLimit = 2;
        options.QueueProcessingOrder = System.Threading.RateLimiting.QueueProcessingOrder.OldestFirst;
        options.SegmentsPerWindow = 3;
       
    });

    // Token Bucket Limiter
    config.AddTokenBucketLimiter("TokenBucketPolicy", static options =>
    {
        options.ReplenishmentPeriod = TimeSpan.FromSeconds(10);
        options.TokenLimit = 3;
        options.QueueLimit = 2;
        options.TokensPerPeriod = 2;
        options.AutoReplenishment = true;
        options.QueueProcessingOrder = System.Threading.RateLimiting.QueueProcessingOrder.OldestFirst;
       
    });

    // Concurrency Limiter
    config.AddConcurrencyLimiter("ConcurrencyPolicy", static options =>
    {
        options.PermitLimit = 3;
        options.QueueLimit = 2;
        options.QueueProcessingOrder = System.Threading.RateLimiting.QueueProcessingOrder.OldestFirst;
       
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRateLimiter();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
