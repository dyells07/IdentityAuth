using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebGYM.Interface;
using WebGYM.ViewModels;

namespace WebGYM.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class GetTotalAmountController : ControllerBase
    {
        private readonly IPlanMaster _planMaster;

        public GetTotalAmountController(IPlanMaster planMaster)
        {
            _planMaster = planMaster ?? throw new ArgumentNullException(nameof(planMaster));
        }

        // POST: api/GetTotalAmount
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] AmountRequestViewModel amountRequest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var amount =  _planMaster.GetAmount(amountRequest.PlanId, amountRequest.SchemeId);
                return Ok(amount);
            }
            catch (Exception ex)
            {
                // Log the exception here (e.g., using ILogger or a logging service)
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }
        }
    }
}
