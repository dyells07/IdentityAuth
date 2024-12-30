using System;
using System.Globalization;
using System.IO;
using System.Text;
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
            var ex = context.Exception;
            var controllerName = (string)context.RouteData.Values["controller"];
            var actionName = (string)context.RouteData.Values["action"];
            var isAjaxRequest = context.HttpContext.Request.Headers["x-requested-with"] == "XMLHttpRequest";

            var logDetails = new StringBuilder();
            logDetails.AppendLine($"Date: {DateTime.Now}");
            logDetails.AppendLine($"Controller: {controllerName}");
            logDetails.AppendLine($"Action: {actionName}");
            logDetails.AppendLine($"Message: {ex.Message}");
            logDetails.AppendLine($"Source: {ex.Source}");
            logDetails.AppendLine($"StackTrace: {ex.StackTrace}");
            logDetails.AppendLine($"TargetSite: {ex.TargetSite}");

            if (ex.InnerException != null)
            {
                logDetails.AppendLine($"Inner Exception: {ex.InnerException}");
            }

            if (ex.HelpLink != null)
            {
                logDetails.AppendLine($"HelpLink: {ex.HelpLink}");
            }

            if (isAjaxRequest)
            {
                logDetails.AppendLine("Note: AJAX request error - Check MVC AJAX implementation.");
            }

            var errorFolder = Path.Combine(_hostingEnvironment.ContentRootPath, "Logs", "ErrorLogs");
            Directory.CreateDirectory(errorFolder);
            var logFilePath = Path.Combine(errorFolder, $"Log_{DateTime.Now:dd-MMMM-yyyy}.txt");

            File.AppendAllText(logFilePath, logDetails.ToString());

            if (!_hostingEnvironment.IsDevelopment())
            {
                var result = new RedirectToRouteResult(new RouteValueDictionary
        {
            {"controller", "Errorview"}, {"action", "Error"}
        });
                context.Result = result;
            }

            context.ExceptionHandled = true;
        }

    }
}
