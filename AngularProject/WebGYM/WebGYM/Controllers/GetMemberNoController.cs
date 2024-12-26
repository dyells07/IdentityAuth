using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
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
    public class GetMemberNoController : ControllerBase
    {
        private readonly IMemberRegistration _memberRegistration;
        private readonly ILogger<GetMemberNoController> _logger;

        public GetMemberNoController(IMemberRegistration memberRegistration, ILogger<GetMemberNoController> logger)
        {
            _memberRegistration = memberRegistration;
            _logger = logger;
        }

        // POST: api/GetMemberNo
        [HttpPost]
        public IActionResult Post([FromBody] MemberRequest memberRequest)
        {
            // Validate the request
            if (memberRequest == null || string.IsNullOrEmpty(memberRequest.MemberName))
            {
                return BadRequest("MemberName is required.");
            }

            try
            {
                // Get the current user's ID
                var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.Name));

                // Get the list of members based on the request
                var members = _memberRegistration.GetMemberNoList(memberRequest.MemberName, userId);

                if (members == null || !members.Any())
                {
                    return NotFound("No members found with the provided criteria.");
                }

                // Return the list of members as a successful response
                return Ok(members);
            }
            catch (Exception ex)
            {
                // Log the error for debugging purposes
                _logger.LogError(ex, "An error occurred while retrieving member data.");

                // Return internal server error with a generic error message
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }
        }
    }
}
