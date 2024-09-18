using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;

namespace RateLimiter.Controllers
{
    [ApiController]    
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet("FixedWindowWeatherForecast")]
        [EnableRateLimiting("FixedWindowPolicy")]
        public IEnumerable<WeatherForecast> GetFixedWindowWeatherForecast()
        {
            return Enumerable.Range(1, 1).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpGet("SlidingWindowWeatherForecast")]
        [EnableRateLimiting("SlidingWindowPolicy")]
        public IEnumerable<WeatherForecast> GetSlidingWindowWeatherForecast()
        {
            return Enumerable.Range(1, 1).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpGet("TokenBucketWeatherForecast")]
        [EnableRateLimiting("TokenBucketPolicy")]
        public IEnumerable<WeatherForecast> GetTokenBucketWeatherForecast()
        {
            return Enumerable.Range(1, 1).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpGet("ConcurrencyWeatherForecast")]
        [EnableRateLimiting("ConcureencyPolicy")]
        public async Task<IEnumerable<WeatherForecast>> GetConcurrencyWeatherForecast()
        {
            await Task.Delay(3000);

            return Enumerable.Range(1, 1).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}