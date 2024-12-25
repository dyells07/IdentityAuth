using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebGYM.Interface;
using WebGYM.Models;

namespace WebGYM.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class RemoveRoleController : ControllerBase
    {
        private readonly IUsersInRoles _usersInRoles;

        public RemoveRoleController(IUsersInRoles usersInRoles)
        {
            _usersInRoles = usersInRoles;
        }

        // POST: api/RemoveRole
        [HttpPost]
        public IActionResult Post([FromBody] UsersInRoles usersInRoles)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid data provided.");
            }

            try
            {
                if (_usersInRoles.CheckRoleExists(usersInRoles))
                {
                    usersInRoles.UserRolesId = 0;
                    _usersInRoles.RemoveRole(usersInRoles);

                    return Ok("Role removed successfully.");
                }
                else
                {
                    return Conflict("The role does not exist.");
                }
            }
            catch (Exception ex)
            {
                // Log the exception here if needed.
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
