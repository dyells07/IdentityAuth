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
                return BadRequest("Request body cannot be null. Please provide valid MemberNoRequest data.");
            }

            try
            {
                var userIdClaim = User.FindFirstValue(ClaimTypes.Name);
                if (!int.TryParse(userIdClaim, out var userId))
                {
                    return Unauthorized("Unable to determine the authenticated user's ID. Please log in and try again.");
                }

                var renewalDetails = _renewal.GetMemberNo(memberNoRequest.MemberNo, userId);
                if (renewalDetails == null)
                {
                    return NotFound($"No renewal details found for the provided MemberNo: {memberNoRequest.MemberNo}");
                }

                return Ok(renewalDetails);
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes (if logging is set up in the application)
                // Example: _logger.LogError(ex, "An error occurred while retrieving renewal details.");
                return StatusCode(StatusCodes.Status500InternalServerError, $"An internal error occurred: {ex.Message}");
            }
        }
    }
}
