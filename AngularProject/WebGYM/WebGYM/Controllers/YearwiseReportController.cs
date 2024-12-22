using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebGYM.Interface;
using WebGYM.ViewModels;

namespace WebGYM.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class YearwiseReportController : ControllerBase
    {
        private readonly IReports _reports;

        public YearwiseReportController(IReports reports)
        {
            _reports = reports ?? throw new ArgumentNullException(nameof(reports));
        }

        // POST: api/YearwiseReport
        [HttpPost]
        public async Task<IActionResult> GetYearwiseReportAsync([FromBody] YearWiseRequestModel request)
        {
            if (request == null || !ModelState.IsValid)
            {
                return BadRequest("Invalid request data.");
            }

            try
            {
                var reportData = await Task.Run(() => _reports.Get_YearwisePayment_details(request.YearID));

                if (reportData == null || reportData.Count == 0)
                {
                    return NotFound("No data found for the given year.");
                }

                return Ok(reportData);
            }
            catch (Exception ex)
            {
                // Optionally log the exception using a logging framework (e.g., ILogger)
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while generating the report.");
            }
        }
    }
}
