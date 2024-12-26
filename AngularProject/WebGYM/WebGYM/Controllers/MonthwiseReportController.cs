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
    public class MonthwiseReportController : ControllerBase
    {
        private readonly IReports _reports;
        private readonly ILogger<MonthwiseReportController> _logger;

        public MonthwiseReportController(IReports reports, ILogger<MonthwiseReportController> logger)
        {
            _reports = reports;
            _logger = logger;
        }

        // POST: api/MonthwiseReport
        [HttpPost]
        public IActionResult Post([FromBody] MonthwiseRequestModel value)
        {
            try
            {
                var report = _reports.Get_MonthwisePayment_details(value.MonthId);

                if (report == null || report.Count == 0)
                {
                    return NotFound("No monthwise payment details found for the given month.");
                }

                return Ok(report);  // Return 200 OK with the data
            }
            catch (Exception ex)
            {
                // Log the error for debugging purposes
                _logger.LogError(ex, "An error occurred while generating the monthwise payment report.");

                // Return a 500 Internal Server Error response
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }
        }
    }
}
