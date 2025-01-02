using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebGYM.Interface;
using WebGYM.ViewModels;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;

namespace WebGYM.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AllActivePlanMasterController : ControllerBase
    {
        private readonly IPlanMaster _planMaster;
        private readonly ILogger<AllActivePlanMasterController> _logger;

        public AllActivePlanMasterController(IPlanMaster planMaster, ILogger<AllActivePlanMasterController> logger)
        {
            _planMaster = planMaster;
            _logger = logger;
        }

        [HttpGet("{id:int?}", Name = "GetAllActivePlan")]
        public ActionResult<List<ActivePlanModel>> Get(int? id)
        {
            try
            {
                if (id.HasValue)
                {
                    var activePlans = _planMaster.GetActivePlanMasterList(id);
                    if (activePlans == null || activePlans.Count == 0)
                    {
                        return NotFound(new { message = "No Active plans found for the given ID." });
                    }

                    return Ok(activePlans);
                }

                return Ok(new List<ActivePlanModel>
                {
                    new ActivePlanModel
                    {
                        PlanID = string.Empty,
                        PlanName = string.Empty
                    }
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching active plan data.");
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while processing your request." });
            }
        }
    }
}
