using ConsumeSoapService.Models;
using Microsoft.AspNetCore.Mvc;
using ServiceReference1; // Your SOAP service reference namespace
using System.Diagnostics;

namespace ConsumeSoapService.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public async Task<IActionResult> Index()
        {
            try
            {
                ISoapService soapServiceChannel = new SoapServiceClient(SoapServiceClient.EndpointConfiguration.BasicHttpBinding_ISoapService_soap);
                var sumResponse = await soapServiceChannel.SumAsync(new SumRequest()
                {
                    Body = new SumRequestBody()
                    {
                        num1 = 2,
                        num2 = 3
                    }
                });

                ViewBag.SumResult = sumResponse.Body.SumResult;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error in Index action: {ex.Message}");
                return View("Error");
            }

            return View();
        }

        public async Task<IActionResult> Subtract()
        {
            try
            {
                ISoapService soapServiceChannel = new SoapServiceClient(SoapServiceClient.EndpointConfiguration.BasicHttpBinding_ISoapService_soap);
                var subtractResponse = await soapServiceChannel.SubtractAsync(new SubtractRequest()
                {
                    Body = new SubtractRequestBody()
                    {
                        num1 = 10,
                        num2 = 4
                    }
                });

                ViewBag.SubtractResult = subtractResponse.Body.SubtractResult;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error in Subtract action: {ex.Message}");
                return View("Error");
            }

            return View();
        }

        public async Task<IActionResult> Multiply()
        {
            try
            {
                ISoapService soapServiceChannel = new SoapServiceClient(SoapServiceClient.EndpointConfiguration.BasicHttpBinding_ISoapService_soap);
                var multiplyResponse = await soapServiceChannel.MultiplyAsync(new MultiplyRequest()
                {
                    Body = new MultiplyRequestBody()
                    {
                        num1 = 6,
                        num2 = 7
                    }
                });

                ViewBag.MultiplyResult = multiplyResponse.Body.MultiplyResult;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error in Multiply action: {ex.Message}");
                return View("Error");
            }

            return View();
        }

        public async Task<IActionResult> Divide()
        {
            try
            {
                ISoapService soapServiceChannel = new SoapServiceClient(SoapServiceClient.EndpointConfiguration.BasicHttpBinding_ISoapService_soap);
                var divideResponse = await soapServiceChannel.DivideAsync(new DivideRequest()
                {
                    Body = new DivideRequestBody()
                    {
                        num1 = 20,
                        num2 = 4
                    }
                });

                ViewBag.DivideResult = divideResponse.Body.DivideResult;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error in Divide action: {ex.Message}");
                return View("Error");
            }

            return View();
        }

        public async Task<IActionResult> GetServerTime()
        {
            try
            {
                ISoapService soapServiceChannel = new SoapServiceClient(SoapServiceClient.EndpointConfiguration.BasicHttpBinding_ISoapService_soap);
                var timeResponse = await soapServiceChannel.GetServerTimeAsync(new GetServerTimeRequest()
                {
                    Body = new GetServerTimeRequestBody()
                });

                ViewBag.ServerTime = timeResponse.Body.ServerTime;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error in GetServerTime action: {ex.Message}");
                return View("Error");
            }

            return View();
        }

        public async Task<IActionResult> ProcessCustomer()
        {
            try
            {
                ISoapService soapServiceChannel = new SoapServiceClient(SoapServiceClient.EndpointConfiguration.BasicHttpBinding_ISoapService_soap);
                var customerResponse = await soapServiceChannel.ProcessCustomerAsync(new ProcessCustomerRequest()
                {
                    Body = new ProcessCustomerRequestBody()
                    {
                        Customer = new Customer()
                        {
                            Name = "John Doe",
                            Age = 30,
                            Email = "john.doe@example.com"
                        }
                    }
                });

                ViewBag.CustomerStatus = customerResponse.Body.Status;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error in ProcessCustomer action: {ex.Message}");
                return View("Error");
            }

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
