using System;
using System.Collections.Generic;
using System.Security.Claims;
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
    public class SchemeController : ControllerBase
    {
        private readonly ISchemeMaster _schemeMaster;

        public SchemeController(ISchemeMaster schemeMaster)
        {
            _schemeMaster = schemeMaster ?? throw new ArgumentNullException(nameof(schemeMaster));
        }

        // GET: api/Scheme
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var schemes = _schemeMaster.GetSchemeMasterList();
                return Ok(schemes);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = $"An error occurred: {ex.Message}" });
            }
        }

        // GET: api/Scheme/5
        [HttpGet("{id}", Name = "GetScheme")]
        public IActionResult Get(int id)
        {
            try
            {
                var scheme = _schemeMaster.GetSchemeMasterbyId(id);
                if (scheme == null)
                {
                    return NotFound($"No scheme found with ID: {id}");
                }
                else
                {
                    return Ok(scheme);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = $"An error occurred: {ex.Message}" });
            }
        }

        // POST: api/Scheme
        [HttpPost]
        public IActionResult Post([FromBody] SchemeMasterViewModel schemeMaster)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid data provided.");
            }

            try
            {
                if (_schemeMaster.CheckSchemeNameExists(schemeMaster.SchemeName))
                {
                    return Conflict("A scheme with the same name already exists.");
                }

                var userId = User.FindFirstValue(ClaimTypes.Name);
                if (string.IsNullOrEmpty(userId) || !int.TryParse(userId, out var createdBy))
                {
                    return StatusCode(StatusCodes.Status401Unauthorized, "User ID could not be determined.");
                }

                var tempSchemeMaster = AutoMapper.Mapper.Map<SchemeMaster>(schemeMaster);
                tempSchemeMaster.Createddate = DateTime.Now;
                tempSchemeMaster.Createdby = createdBy;

                _schemeMaster.AddSchemeMaster(tempSchemeMaster);

                return Ok("Scheme added successfully.");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = $"An error occurred: {ex.Message}" });
            }
        }

        // PUT: api/Scheme/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] SchemeMasterEditViewModel schemeMaster)
        {
            if (id <= 0 || schemeMaster == null)
            {
                return BadRequest("Invalid scheme ID or data.");
            }

            try
            {
                var temp = AutoMapper.Mapper.Map<SchemeMaster>(schemeMaster);
                var result = _schemeMaster.UpdateSchemeMaster(temp);

                if (result)
                {
                    return Ok("Scheme updated successfully.");
                }

                return NotFound($"No scheme found with ID: {id}");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = $"An error occurred: {ex.Message}" });
            }
        }

        // DELETE: api/Scheme/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid scheme ID.");
            }

            try
            {
                var result = _schemeMaster.DeleteScheme(id);

                if (result)
                {
                    return Ok("Scheme deleted successfully.");
                }

                return NotFound($"No scheme found with ID: {id}");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = $"An error occurred: {ex.Message}" });
            }
        }
    }
}
