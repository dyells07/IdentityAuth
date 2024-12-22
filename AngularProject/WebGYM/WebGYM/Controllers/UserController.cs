using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebGYM.Common;
using WebGYM.Interface;
using WebGYM.Models;
using WebGYM.ViewModels;

namespace WebGYM.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUsers _users;

        public UserController(IUsers users)
        {
            _users = users ?? throw new ArgumentNullException(nameof(users));
        }

        // GET: api/User
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var users = await Task.Run(() => _users.GetAllUsers());
                return Ok(users);
            }
            catch (Exception ex)
            {
                // Optional: Log the exception
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while retrieving users.");
            }
        }

        // GET: api/User/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var user = await Task.Run(() => _users.GetUsersbyId(id));
                if (user == null)
                    return NotFound($"User with ID {id} not found.");

                return Ok(user);
            }
            catch (Exception ex)
            {
                // Optional: Log the exception
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while retrieving the user.");
            }
        }

        // POST: api/User
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] UsersViewModel users)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                if (_users.CheckUsersExits(users.UserName))
                {
                    return Conflict("A user with the same username already exists.");
                }

                var userId = User.FindFirstValue(ClaimTypes.Name);
                var tempUsers = AutoMapper.Mapper.Map<Users>(users);
                tempUsers.CreatedDate = DateTime.Now;
                tempUsers.Createdby = Convert.ToInt32(userId);
                tempUsers.Password = EncryptionLibrary.EncryptText(users.Password);

                await Task.Run(() => _users.InsertUsers(tempUsers));
                return Ok("User created successfully.");
            }
            catch (Exception ex)
            {
                // Optional: Log the exception
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while creating the user.");
            }
        }

        // PUT: api/User/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] UsersViewModel users)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var tempUsers = AutoMapper.Mapper.Map<Users>(users);
                tempUsers.CreatedDate = DateTime.Now;

                await Task.Run(() => _users.UpdateUsers(tempUsers));
                return Ok("User updated successfully.");
            }
            catch (Exception ex)
            {
                // Optional: Log the exception
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while updating the user.");
            }
        }

        // DELETE: api/User/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var result = await Task.Run(() => _users.DeleteUsers(id));
                if (result)
                    return Ok("User deleted successfully.");
                else
                    return BadRequest("Failed to delete the user.");
            }
            catch (Exception ex)
            {
                // Optional: Log the exception
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while deleting the user.");
            }
        }
    }
}
