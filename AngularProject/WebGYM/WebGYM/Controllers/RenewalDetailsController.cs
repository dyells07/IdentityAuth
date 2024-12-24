using System;
using System.Security.Claims;
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
    public class RenewalDetailsController : ControllerBase
    {
        private readonly IRenewal _renewal;

        public RenewalDetailsController(IRenewal renewal)
        {
            _renewal = renewal ?? throw new ArgumentNullException(nameof(renewal));
        }

        // POST: api/RenewalDetails
        [HttpPost]
        public IActionResult Post([FromBody] MemberNoRequest memberNoRequest)
        {
            if (memberNoRequest == null)
            {
                return BadRequest("Invalid request. MemberNoRequest cannot be null.");
            }

            try
            {
                var userIdClaim = this.User.FindFirstValue(ClaimTypes.Name);
                if (string.IsNullOrEmpty(userIdClaim) || !int.TryParse(userIdClaim, out var userId))
                {
                    return StatusCode(StatusCodes.Status401Unauthorized, "User ID could not be determined.");
                }

                var renewalDetails = _renewal.GetMemberNo(memberNoRequest.MemberNo, userId);
                if (renewalDetails == null)
                {
                    return NotFound($"No renewal details found for MemberNo: {memberNoRequest.MemberNo}");
                }

                return Ok(renewalDetails);
            }
            catch (Exception ex)
            {
                // Log the exception here if logging is implemented
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }
    }
}
