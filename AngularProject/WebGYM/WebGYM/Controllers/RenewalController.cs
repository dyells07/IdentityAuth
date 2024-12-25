using System;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebGYM.Interface;
using WebGYM.ViewModels;

namespace WebGYM.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class RenewalController : ControllerBase
    {
        private readonly IRenewal _renewal;
        private readonly IPaymentDetails _paymentDetails;
        private readonly IPlanMaster _planMaster;

        public RenewalController(IRenewal renewal, IPaymentDetails paymentDetails, IPlanMaster planMaster)
        {
            _renewal = renewal;
            _paymentDetails = paymentDetails;
            _planMaster = planMaster;
        }

        // GET: api/Renewal/5
        [HttpGet("{memberNo}", Name = "GetRenewal")]
        public IActionResult Get(string memberNo)
        {
            try
            {
                var userId = Convert.ToInt32(User.FindFirstValue(ClaimTypes.Name));
                var renewalData = _renewal.GetMemberNo(memberNo, userId);

                if (renewalData == null)
                {
                    return NotFound("Member not found.");
                }

                return Ok(renewalData);
            }
            catch (Exception ex)
            {
                // Log the exception here if needed
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // POST: api/Renewal
        [HttpPost]
        public IActionResult Post([FromBody] RenewalViewModel renewalViewModel)
        {
            try
            {
                if (_renewal.CheckRenewalPaymentExists(renewalViewModel.NewDate, renewalViewModel.MemberId))
                {
                    return BadRequest("Renewal already exists for the provided date.");
                }

                var comparison = renewalViewModel.NewDate.CompareTo(renewalViewModel.NextRenwalDate);

                if (comparison < 0)
                {
                    return BadRequest("New renewal date cannot be earlier than the next renewal date.");
                }

                var userId = Convert.ToInt32(User.FindFirstValue(ClaimTypes.Name));
                if (comparison > 0)
                {
                    var months = _planMaster.GetPlanMonthbyPlanId(renewalViewModel.PlanID);
                    var calculatedNextRenewalDate = renewalViewModel.NewDate.AddMonths(months).AddDays(-1);
                    renewalViewModel.NextRenwalDate = calculatedNextRenewalDate;
                    renewalViewModel.Createdby = userId;

                    if (_paymentDetails.RenewalPayment(renewalViewModel))
                    {
                        return Ok("Renewal processed successfully.");
                    }
                    else
                    {
                        return StatusCode(500, "Failed to process renewal.");
                    }
                }

                return BadRequest("Unexpected error occurred while processing renewal.");
            }
            catch (Exception ex)
            {
                // Log the exception here if needed
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
