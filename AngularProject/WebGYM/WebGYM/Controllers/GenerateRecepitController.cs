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

        [HttpPost]
        public IActionResult Post([FromBody] GenerateRecepitRequestModel generateRecepitRequestModel)
        {
            if (generateRecepitRequestModel == null || generateRecepitRequestModel.PaymentId <= 0)
            {
                return BadRequest("Invalid request. PaymentId is required.");
            }

            try
            {
                var receipt = _generateRecepit.Generate(generateRecepitRequestModel.PaymentId);

                if (receipt == null)
                {
                    return NotFound("Receipt could not be generated.");
                }

                return Ok(receipt);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while generating the receipt.");
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while generating the receipt.");
            }
        }
    }
}
