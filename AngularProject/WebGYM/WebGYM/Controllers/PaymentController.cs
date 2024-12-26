using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebGYM.Common;
using WebGYM.Interface;
using WebGYM.Models;
using WebGYM.ViewModels;
using Microsoft.Extensions.Logging;

namespace WebGYM.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly IPaymentDetails _paymentDetails;
        private readonly IUrlHelper _urlHelper;
        private readonly ILogger<PaymentController> _logger;

        public PaymentController(IUrlHelper urlHelper, IPaymentDetails paymentDetails, ILogger<PaymentController> logger)
        {
            _paymentDetails = paymentDetails;
            _urlHelper = urlHelper;
            _logger = logger;
        }

        // GET: api/Payment
        [HttpGet(Name = "GetAllPayment")]
        public IActionResult GetAllPayment([FromQuery] QueryParameters queryParameters)
        {
            try
            {
                // Ensure valid query parameters
                if (queryParameters.Page <= 0 || queryParameters.PageCount <= 0)
                {
                    return BadRequest("Invalid pagination parameters.");
                }

                var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.Name));

                List<PaymentDetailsViewModel> allMembers = _paymentDetails.GetAll(queryParameters, userId).ToList();

                if (!allMembers.Any())
                {
                    return NotFound("No payment details found.");
                }

                var allItemCount = _paymentDetails.Count(userId);

                var paginationMetadata = new
                {
                    totalCount = allItemCount,
                    pageSize = queryParameters.PageCount,
                    currentPage = queryParameters.Page,
                    totalPages = queryParameters.GetTotalPages(allItemCount)
                };

                // Add pagination metadata to response headers
                Request.HttpContext.Response.Headers.Add("X-Pagination", JsonConvert.SerializeObject(paginationMetadata));

                return Ok(new
                {
                    value = allMembers
                });
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                _logger.LogError(ex, "An error occurred while fetching payment details.");

                // Return 500 Internal Server Error with message
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }
        }
    }
}
