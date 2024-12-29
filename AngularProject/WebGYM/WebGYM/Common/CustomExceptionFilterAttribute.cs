using System;
using System.Globalization;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Routing;
namespace WebGYM.Common
{
    public class CustomExceptionFilterAttribute : ExceptionFilterAttribute
    {
        private readonly IHostingEnvironment _hostingEnvironment;

        public CustomExceptionFilterAttribute(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        public override void OnException(ExceptionContext context)
        {
            string strLogText = "";
            Exception ex = context.Exception;

            context.ExceptionHandled = true;
            var objClass = context;
            strLogText += "Message ---\n{0}" + ex.Message;


            if (context.HttpContext.Request.Headers["x-requested-with"] == "XMLHttpRequest")
            {
                strLogText += Environment.NewLine + ".Net Error ---\n{0}" + "Check MVC Ajax Code For Error";
            }

            strLogText += Environment.NewLine + "Source ---\n{0}" + ex.Source;
            strLogText += Environment.NewLine + "StackTrace ---\n{0}" + ex.StackTrace;
            strLogText += Environment.NewLine + "TargetSite ---\n{0}" + ex.TargetSite;
            if (ex.InnerException != null)
            {
                strLogText += Environment.NewLine + "Inner Exception is {0}" + ex.InnerException;
            }
            if (ex.HelpLink != null)
            {
                strLogText += Environment.NewLine + "HelpLink ---\n{0}" + ex.HelpLink;
            }

            StreamWriter log;

            string timestamp = DateTime.Now.ToString("d-MMMM-yyyy", new CultureInfo("en-GB"));

            string errorFolder = Path.Combine(_hostingEnvironment.WebRootPath, "ErrorLog");

            if (!System.IO.Directory.Exists(errorFolder))
            {
                System.IO.Directory.CreateDirectory(errorFolder);
            }

            if (!File.Exists($@"{errorFolder}\Log_{timestamp}.txt"))
            {
                log = new StreamWriter($@"{errorFolder}\Log_{timestamp}.txt");
            }
            else
            {
                log = File.AppendText($@"{errorFolder}\Log_{timestamp}.txt");
            }

            var controllerName = (string)context.RouteData.Values["controller"];
            var actionName = (string)context.RouteData.Values["action"];

            log.WriteLine(Environment.NewLine + DateTime.Now);
            log.WriteLine("------------------------------------------------------------------------------------------------");
            log.WriteLine("Controller Name :- " + controllerName);
            log.WriteLine("Action Method Name :- " + actionName);
            log.WriteLine("------------------------------------------------------------------------------------------------");
            log.WriteLine(objClass);
            log.WriteLine(strLogText);
            log.WriteLine();
            log.Close();


            if (!_hostingEnvironment.IsDevelopment())
            {
                return;
            }
            var result = new RedirectToRouteResult(
            new RouteValueDictionary
            {
            {"controller", "Errorview"}, {"action", "Error"}
            });
            context.Result = result;
        }
    }
}
