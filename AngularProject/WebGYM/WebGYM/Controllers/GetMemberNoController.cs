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

        [HttpPost]
        public IActionResult Post([FromBody] MemberRequest memberRequest)
        {
            if (memberRequest == null || string.IsNullOrEmpty(memberRequest.MemberName))
            {
                return BadRequest("MemberName is required.");
            }

            try
            {
                var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.Name));
                var members = _memberRegistration.GetMemberNoList(memberRequest.MemberName, userId);

                if (members == null || !members.Any())
                {
                    return NotFound("No members found with the provided criteria.");
                }
                return Ok(members);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while retrieving member data.");
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }
        }
    }
}
