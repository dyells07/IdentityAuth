using Microsoft.AspNetCore.RateLimiting;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddRateLimiter(config =>
{
    config.AddFixedWindowLimiter("FixedWindowPolicy", options =>
    {
        options.Window = TimeSpan.FromSeconds(10);
        options.PermitLimit = 3;
        options.QueueLimit = 2;
        options.QueueProcessingOrder = System.Threading.RateLimiting.QueueProcessingOrder.OldestFirst;
    }).RejectionStatusCode = 429;
});

builder.Services.AddRateLimiter(config =>
{
    config.AddSlidingWindowLimiter("SlidingWindowPolicy", options =>
    {
        options.Window = TimeSpan.FromSeconds(15);
        options.PermitLimit = 3;
        options.QueueLimit = 2;
        options.QueueProcessingOrder = System.Threading.RateLimiting.QueueProcessingOrder.OldestFirst;
        options.SegmentsPerWindow = 3;
    }).RejectionStatusCode = 429;
});

builder.Services.AddRateLimiter(config =>
{
    config.AddTokenBucketLimiter("TokenBucketPolicy", options =>
    {
        options.ReplenishmentPeriod = TimeSpan.FromSeconds(10);
        options.TokenLimit = 3;
        options.QueueLimit = 2;
        options.TokensPerPeriod = 2;
        options.AutoReplenishment = true;
        options.QueueProcessingOrder = System.Threading.RateLimiting.QueueProcessingOrder.OldestFirst;
    }).RejectionStatusCode = 429;
});

builder.Services.AddRateLimiter(config =>
{
    config.AddConcurrencyLimiter("ConcureencyPolicy", options =>
    {
        options.PermitLimit = 3;
        options.QueueLimit = 2;
        options.QueueProcessingOrder = System.Threading.RateLimiting.QueueProcessingOrder.OldestFirst;
    }).RejectionStatusCode = 429;
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
