using System;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using WebGYM.Interface;
using WebGYM.Models;

namespace WebGYM.Controllers
{
    public class HomeController : Controller
    {
        private readonly ISchemeMaster _schemeMaster;

        public HomeController(ISchemeMaster schemeMaster)
        {
            _schemeMaster = schemeMaster ?? throw new ArgumentNullException(nameof(schemeMaster));
        }

        public IActionResult Index() => View();

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";
            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";
            return View();
        }

        public IActionResult Privacy() => View();

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            // Optional: Add logging for detailed error tracking
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
