using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebGYM.Interface;
using WebGYM.Models;

namespace WebGYM.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class SchemeDropdownController : ControllerBase
    {
        private readonly ISchemeMaster _schemeMaster;

        public SchemeDropdownController(ISchemeMaster schemeMaster)
        {
            _schemeMaster = schemeMaster ?? throw new ArgumentNullException(nameof(schemeMaster));
        }

        // GET: api/SchemeDropdown
        [HttpGet]
        public async Task<IActionResult> GetActiveSchemesAsync()
        {
            try
            {
                var activeSchemes = await Task.Run(() => _schemeMaster.GetActiveSchemeMasterList());

                if (activeSchemes == null || !activeSchemes.Any())
                {
                    return NotFound("No active schemes found.");
                }

                return Ok(activeSchemes);
            }
            catch (Exception ex)
            {
                // Optionally log the exception using a logging framework (e.g., ILogger)
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while retrieving the schemes.");
            }
        }
    }
}
