using System;
using System.Collections.Generic;
using System.Linq;
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
    public class CreateRoleController : ControllerBase
    {
        private readonly IRole _role;

        public CreateRoleController(IRole role)
        {
            _role = role ?? throw new ArgumentNullException(nameof(role));
        }

        [HttpGet]
        public ActionResult<IEnumerable<Role>> GetAllRoles()
        {
            try
            {
                var roles = _role.GetAllRole();
                return Ok(roles);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while retrieving roles.", details = ex.Message });
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Role> GetRoleById(int id)
        {
            try
            {
                var role = _role.GetRolebyId(id);
                if (role == null)
                {
                    return NotFound(new { message = "Role not found." });
                }

                return Ok(role);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while retrieving the role.", details = ex.Message });
            }
        }

        [HttpPost]
        public IActionResult CreateRole([FromBody] RoleViewModel roleViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { message = "Invalid role data." });
            }

            try
            {
                if (_role.CheckRoleExits(roleViewModel.RoleName))
                {
                    return Conflict(new { message = "Role already exists." });
                }

                var role = AutoMapper.Mapper.Map<Role>(roleViewModel);
                _role.InsertRole(role);

                return Ok(new { message = "Role created successfully." });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while creating the role.", details = ex.Message });
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateRole(int id, [FromBody] RoleViewModel roleViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { message = "Invalid role data." });
            }

            try
            {
                var role = AutoMapper.Mapper.Map<Role>(roleViewModel);
                role.RoleId = id;

                _role.UpdateRole(role);

                return Ok(new { message = "Role updated successfully." });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while updating the role.", details = ex.Message });
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteRole(int id)
        {
            try
            {
                var result = _role.DeleteRole(id);

                if (!result)
                {
                    return BadRequest(new { message = "Role deletion failed." });
                }

                return Ok(new { message = "Role deleted successfully." });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while deleting the role.", details = ex.Message });
            }
        }
    }
}
