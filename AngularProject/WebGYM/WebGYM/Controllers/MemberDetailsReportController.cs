using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebGYM.Interface;
using WebGYM.ViewModels;
using Microsoft.Extensions.Logging;

namespace WebGYM.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class MemberDetailsReportController : ControllerBase
    {
        private readonly IReports _reports;
        private readonly ILogger<MemberDetailsReportController> _logger;

        public MemberDetailsReportController(IReports reports, ILogger<MemberDetailsReportController> logger)
        {
            _reports = reports;
            _logger = logger;
        }

        // GET: api/MemberDetailsReport
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var report = _reports.Generate_AllMemberDetailsReport();

                if (report == null || report.Count == 0)
                {
                    return NotFound("No member details found.");
                }

                return Ok(report);  // Return 200 OK with the data
            }
            catch (Exception ex)
            {
                // Log the error for debugging purposes
                _logger.LogError(ex, "An error occurred while generating the member details report.");

                // Return a 500 Internal Server Error response
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }
        }
    }
}
