using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using WebGYM.Common;
using WebGYM.Interface;
using WebGYM.Models;
using WebGYM.ViewModels;

namespace WebGYM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly AppSettings _appSettings;
        private readonly IUsers _users;
        private readonly ILogger<AuthenticateController> _logger;

        public AuthenticateController(IOptions<AppSettings> appSettings, IUsers users, ILogger<AuthenticateController> logger)
        {
            _users = users;
            _appSettings = appSettings.Value;
            _logger = logger;
        }

        [HttpPost]
        public IActionResult Post([FromBody] LoginRequestViewModel value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { message = "Invalid login request." });
            }

            try
            {
                var encryptedPassword = EncryptionLibrary.EncryptText(value.Password);
                if (!_users.AuthenticateUsers(value.UserName, encryptedPassword))
                {
                    return StatusCode(StatusCodes.Status401Unauthorized, new { message = "An error occurred while processing your request." });
                }

                var userdetails = _users.GetUserDetailsbyCredentials(value.UserName);
                if (userdetails == null)
                {
                    return NotFound(new { message = "User details not found." });
                }

                // Generate JWT token
                var token = GenerateJwtToken(userdetails.UserId);
                value.Token = token;
                value.Password = null; // Remove sensitive information
                value.Usertype = userdetails.RoleId;

                return Ok(value);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred during user authentication.");
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while processing your request." });
            }
        }

        private string GenerateJwtToken(int userId)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Name, userId.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
