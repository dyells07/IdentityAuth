using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebGYM.Interface;
using WebGYM.Models;
using WebGYM.ViewModels;

namespace WebGYM.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PlanMasterController : ControllerBase
    {
        private readonly IPlanMaster _planMaster;

        public PlanMasterController(IPlanMaster planMaster)
        {
            _planMaster = planMaster;
        }

        // GET: api/PlanMaster
        [HttpGet]
        public IEnumerable<PlanMasterDisplayViewModel> Get()
        {
            return _planMaster.GetPlanMasterList();
        }

        // GET: api/PlanMaster/5
        [HttpGet("{id}", Name = "GetPlan")]
        public ActionResult<PlanMasterViewModel> Get(int id)
        {
            try
            {
                var plan = _planMaster.GetPlanMasterbyId(id);
                if (plan == null)
                {
                    return NotFound("Plan not found.");
                }
                return Ok(plan);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while fetching the plan.");
            }
        }

        // POST: api/PlanMaster
        [HttpPost]
        public ActionResult Post([FromBody] PlanMasterViewModel planMasterViewModel)
        {
            try
            {
                // Check if the plan already exists
                if (_planMaster.CheckPlanExits(planMasterViewModel.PlanName))
                {
                    return Conflict("Plan with this name already exists.");
                }

                var userId = this.User.FindFirstValue(ClaimTypes.Name);
                var plan = AutoMapper.Mapper.Map<PlanMaster>(planMasterViewModel);
                plan.CreateUserID = Convert.ToInt32(userId);
                plan.RecStatus = true;

                // Insert plan (if InsertPlan is async, call it with await, else call synchronously)
                _planMaster.InsertPlan(plan);  // Assuming InsertPlan is a synchronous method

                // Return CreatedAtRoute with the new plan's ID
                return CreatedAtRoute("GetPlan", new { id = plan.PlanID }, plan); // Ensure PlanId is correct
            }
            catch (Exception ex)
            {
                // Log error
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while creating the plan.");
            }
        }

        // PUT: api/PlanMaster/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] PlanMasterViewModel planMasterViewModel)
        {
            try
            {
                var plan = _planMaster.GetPlanMasterbyId(id);
                if (plan == null)
                {
                    return NotFound("Plan not found.");
                }

                var userId = this.User.FindFirstValue(ClaimTypes.Name);
                var updatedPlan = AutoMapper.Mapper.Map<PlanMaster>(planMasterViewModel);
                updatedPlan.CreateUserID = Convert.ToInt32(userId);
                updatedPlan.RecStatus = true;

                // Update plan (if UpdatePlanMaster is async, call it with await, else call synchronously)
                _planMaster.UpdatePlanMaster(updatedPlan);  // Assuming UpdatePlanMaster is a synchronous method

                return NoContent(); // Successful update (no content to return)
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while updating the plan.");
            }
        }

        // DELETE: api/PlanMaster/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var plan = _planMaster.GetPlanMasterbyId(id);
                if (plan == null)
                {
                    return NotFound("Plan not found.");
                }

                // Delete plan (if DeletePlan is async, call it with await, else call synchronously)
                _planMaster.DeletePlan(id);  // Assuming DeletePlan is a synchronous method

                return Ok("Plan deleted successfully.");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while deleting the plan.");
            }
        }
    }
}
