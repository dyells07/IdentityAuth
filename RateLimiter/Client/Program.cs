using System.Diagnostics;

internal class Program
{
    static HttpClient httpClient;
    static int seconds = 0;
    private static System.Timers.Timer timer;

    private async static Task Main(string[] args)
    {
        var userResponse = "n";
        SetTimer();

        do
        {
            var tasks = new List<Task>
            {
                GetCustomers("1st"),
                GetCustomers("2nd"),
                GetCustomers("3rd"),
                GetCustomers("4th"),
                GetCustomers("5th"),
                GetCustomers("6th"),
                GetCustomers("7th")
            };

            await Task.WhenAll(tasks);

            Console.WriteLine("all requests have been sent!");

            Console.WriteLine("do you want to repeat again? (y/n)");
            userResponse = Console.ReadLine();

        } while (userResponse.Equals("y", StringComparison.OrdinalIgnoreCase));


        Console.ReadLine();
    }

    private static void SetTimer()
    {
        timer = new System.Timers.Timer(1000);
        timer.Elapsed += Timer_Elapsed;
        timer.Enabled = true;
    }

    private static void Timer_Elapsed(object? sender, System.Timers.ElapsedEventArgs e)
    {
        seconds++;
    }

    private static async Task GetCustomers(string iteration, int delayInMs = 0)
    {
        Stopwatch sw = new Stopwatch();
        await Task.Delay(delayInMs * 1000);
        Console.WriteLine($"at {seconds}s : {iteration} request");
        sw.Start();
        var response = await MakeApiCall();
        sw.Stop();
        Console.WriteLine($"\nat {seconds}s : {iteration} response in ({sw.ElapsedMilliseconds / 1000}s) {response}\n");
    }

    private static async Task<string> MakeApiCall()
    {
        try
        {
            var fixedWindowLimiterUrl = "https://localhost:7234/FixedWindowWeatherForecast";
            var slidingWindowLimiterUrl = "https://localhost:7234/SlidingWindowWeatherForecast";
            var tokenBucketLimiterUrl = "https://localhost:7234/TokenBucketWeatherForecast";
            var concurrencyLimiterUrl = "https://localhost:7234/ConcurrencyWeatherForecast";

            httpClient = new HttpClient();
            return await httpClient.GetStringAsync(concurrencyLimiterUrl);
        }
        catch (HttpRequestException exception) when (exception.StatusCode == System.Net.HttpStatusCode.TooManyRequests)
        {
            return exception.Message;
        }
        catch
        {
            throw;
        }
    }
}