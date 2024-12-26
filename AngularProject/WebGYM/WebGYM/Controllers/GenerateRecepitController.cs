using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebGYM.Interface;
using WebGYM.ViewModels;
using Microsoft.Extensions.Logging;

namespace WebGYM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenerateRecepitController : ControllerBase
    {
        private readonly IGenerateRecepit _generateRecepit;
        private readonly ILogger<GenerateRecepitController> _logger;

        public GenerateRecepitController(IGenerateRecepit generateRecepit, ILogger<GenerateRecepitController> logger)
        {
            _generateRecepit = generateRecepit;
            _logger = logger;
        }

        // POST: api/GenerateRecepit
        [HttpPost]
        public IActionResult Post([FromBody] GenerateRecepitRequestModel generateRecepitRequestModel)
        {
            // Check for validation
            if (generateRecepitRequestModel == null || generateRecepitRequestModel.PaymentId <= 0)
            {
                return BadRequest("Invalid request. PaymentId is required.");
            }

            try
            {
                // Call service layer to generate receipt
                var receipt = _generateRecepit.Generate(generateRecepitRequestModel.PaymentId);

                // If no receipt is generated, return not found
                if (receipt == null)
                {
                    return NotFound("Receipt could not be generated.");
                }

                // Return the generated receipt as OK response
                return Ok(receipt);
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                _logger.LogError(ex, "An error occurred while generating the receipt.");

                // Return internal server error with a message
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while generating the receipt.");
            }
        }
    }
}
