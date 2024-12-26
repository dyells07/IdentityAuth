using System;
using System.Collections.Generic;
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
    public class RenewalReportController : ControllerBase
    {
        private readonly IReports _reports;

        public RenewalReportController(IReports reports)
        {
            _reports = reports ?? throw new ArgumentNullException(nameof(reports));
        }

        // POST: api/RenewalReport
        [HttpPost]
        public IActionResult Post([FromBody] RenewalReportRequestModel request)
        {
            if (request == null)
            {
                return BadRequest("Request cannot be null.");
            }

            try
            {
                var renewalReports = _reports.Get_RenewalReport(request);

                if (renewalReports == null || renewalReports.Count == 0)
                {
                    return NotFound("No renewal reports found for the specified criteria.");
                }

                return Ok(renewalReports);
            }
            catch (Exception ex)
            {
                // Log the exception here if logging is implemented
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = $"An error occurred: {ex.Message}" });
            }
        }
    }
}
