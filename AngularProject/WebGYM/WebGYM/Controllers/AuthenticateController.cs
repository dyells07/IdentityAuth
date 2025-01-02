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
            _users = users ?? throw new ArgumentNullException(nameof(users));
            _appSettings = appSettings?.Value ?? throw new ArgumentNullException(nameof(appSettings));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        [HttpPost]
        public IActionResult Authenticate([FromBody] LoginRequestViewModel loginRequest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { message = "Invalid login request." });
            }

            try
            {
                var encryptedPassword = EncryptionLibrary.EncryptText(loginRequest.Password, _appSettings.Secret);

                if (!_users.AuthenticateUsers(loginRequest.UserName, encryptedPassword))
                {
                    return StatusCode(StatusCodes.Status401Unauthorized, new { message = "Invalid username or password." });
                }
                var userDetails = _users.GetUserDetailsbyCredentials(loginRequest.UserName);
                if (userDetails == null)
                {
                    return NotFound(new { message = "User details not found." });
                }
                var token = GenerateJwtToken(userDetails.UserId);
                loginRequest.Token = token;
                loginRequest.Password = null;
                loginRequest.Usertype = userDetails.RoleId;

                return Ok(loginRequest);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error during authentication.");
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while processing your request." });
            }
        }

        private string GenerateJwtToken(int userId)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim(ClaimTypes.Name, userId.ToString()) }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
