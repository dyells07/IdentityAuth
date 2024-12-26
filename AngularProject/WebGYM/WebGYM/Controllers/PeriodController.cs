using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebGYM.Interface;
using WebGYM.Models;
using Microsoft.Extensions.Logging;
using System.Linq;

namespace WebGYM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeriodController : ControllerBase
    {
        private readonly IPeriodMaster _periodMaster;
        private readonly ILogger<PeriodController> _logger;

        public PeriodController(IPeriodMaster periodMaster, ILogger<PeriodController> logger)
        {
            _periodMaster = periodMaster;
            _logger = logger;
        }

        // GET: api/Period
        [HttpGet]
        public ActionResult<IEnumerable<PeriodTB>> Get()
        {
            try
            {
                var periods = _periodMaster.ListofPeriod();

                if (periods == null || !periods.Any())
                {
                    // Return 404 if no periods are found
                    return NotFound("No periods found.");
                }

                return Ok(periods);
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                _logger.LogError(ex, "An error occurred while fetching periods.");

                // Return a 500 Internal Server Error with a message
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }
        }
    }
}
