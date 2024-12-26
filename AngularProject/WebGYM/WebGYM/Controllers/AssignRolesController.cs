using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebGYM.Interface;
using WebGYM.Models;
using WebGYM.ViewModels;

namespace WebGYM.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AssignRolesController : ControllerBase
    {
        private readonly IUsersInRoles _usersInRoles;

        public AssignRolesController(IUsersInRoles usersInRoles)
        {
            _usersInRoles = usersInRoles ?? throw new ArgumentNullException(nameof(usersInRoles));
        }

        // GET: api/AssignRoles
        [HttpGet]
        public IActionResult GetAssignedRoles()
        {
            try
            {
                var roles = _usersInRoles.GetAssignRoles();
                if (roles == null || !roles.Any())
                {
                    return NotFound(new { message = "No assigned roles found." });
                }

                return Ok(roles);
            }
            catch (Exception ex)
            {
                // Log the exception if a logging framework is in use
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = $"An error occurred while retrieving roles: {ex.Message}" });
            }
        }

        // POST: api/AssignRoles
        [HttpPost]
        public IActionResult AssignRole([FromBody] UsersInRoles usersInRoles)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(new { message = "Invalid input data." });
                }

                if (_usersInRoles.CheckRoleExists(usersInRoles))
                {
                    return Conflict(new { message = "Role assignment already exists." });
                }

                usersInRoles.UserRolesId = 0;
                _usersInRoles.AssignRole(usersInRoles);
                return Ok(new { message = "Role assigned successfully." });
            }
            catch (Exception ex)
            {
                // Log the exception if a logging framework is in use
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = $"An error occurred while assigning roles: {ex.Message}" });
            }
        }
    }
}
