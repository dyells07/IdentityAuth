using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RdlcWebApi.Services;
using System;
using System.Net.Mime;
using System.Threading.Tasks;

namespace RdlcWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReportController : ControllerBase
    {
        private readonly IReportService _reportService;

        public ReportController(IReportService reportService)
        {
            _reportService = reportService;
        }

        [HttpGet("{reportName}/{reportType}/{lang}")]
        public async Task<ActionResult> Get(string reportName, string reportType, string lang)
        {
            if (string.IsNullOrWhiteSpace(reportType))
            {
                return BadRequest("Report type is required.");
            }

            var reportNameWithLang = $"{reportName}_{lang}";
            var reportFileByteString =  _reportService.GenerateReportAsync(reportNameWithLang, reportType);

            var mediaType = reportType.ToUpper() switch
            {
                "PDF" => MediaTypeNames.Application.Pdf,
                "XLS" => MediaTypeNames.Application.Octet,
                "WORD" => MediaTypeNames.Application.Octet,
                _ => MediaTypeNames.Application.Octet
            };

            return File(
                reportFileByteString,
                mediaType,
                GetReportName(reportNameWithLang, reportType),
                enableRangeProcessing: reportType.Equals("PDF", StringComparison.OrdinalIgnoreCase)
            );
        }

        private static string GetReportName(string reportName, string reportType) =>
            reportType.ToUpper() switch
            {
                "PDF" => $"{reportName}.pdf",
                "XLS" => $"{reportName}.xls",
                "WORD" => $"{reportName}.doc",
                _ => $"{reportName}.pdf"
            };
    }
}
