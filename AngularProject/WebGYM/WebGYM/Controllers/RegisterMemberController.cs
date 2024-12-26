using System;
using System.Collections.Generic;
using System.Security.Claims;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebGYM.Interface;
using WebGYM.Models;
using WebGYM.ViewModels;

namespace WebGYM.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterMemberController : ControllerBase
    {
        private readonly IMemberRegistration _memberRegistration;
        private readonly IMapper _mapper;

        public RegisterMemberController(IMapper mapper, IMemberRegistration memberRegistration)
        {
            _memberRegistration = memberRegistration;
            _mapper = mapper;
        }

        // Helper method for creating responses
        private IActionResult CreateResponse(bool isSuccess, object result = null, int statusCode = StatusCodes.Status200OK)
        {
            return isSuccess ? Ok(result) : StatusCode(statusCode, result);
        }

        // GET: api/RegisterMember
        [HttpGet(Name = "GetAll")]
        public IActionResult GetAll([FromQuery] QueryParameters queryParameters)
        {
            try
            {
                var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
                var allMembers = _memberRegistration.GetAll(queryParameters, userId);
                var totalCount = _memberRegistration.Count(userId);

                var paginationMetadata = new
                {
                    totalCount,
                    queryParameters.PageCount,
                    queryParameters.Page,
                    totalPages = queryParameters.GetTotalPages(totalCount)
                };

                Response.Headers.Add("X-Pagination", JsonConvert.SerializeObject(paginationMetadata));
                return Ok(new { value = allMembers });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = ex.Message });
            }
        }

        // GET: api/RegisterMember/5
        [HttpGet("{id}", Name = "GetMember")]
        public IActionResult GetMember(int id)
        {
            try
            {
                var member = _memberRegistration.GetMemberbyId(id);
                if (member != null)
                {
                    return Ok(member);
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = ex.Message });
            }
        }


        // POST: api/RegisterMember
        [HttpPost]
        public IActionResult Post([FromBody] MemberRegistrationViewModel member)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (_memberRegistration.CheckNameExits(member.MemberFName, member.MemberLName, member.MemberMName))
                return Conflict(new { message = "Member with the same name already exists." });

            try
            {
                var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
                var automember = _mapper.Map<MemberRegistration>(member);
                automember.JoiningDate = DateTime.Now;
                automember.Createdby = userId;

                var result = _memberRegistration.InsertMember(automember);
                return CreateResponse(result > 0, new { message = "Member added successfully." });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = ex.Message });
            }
        }

        // PUT: api/RegisterMember/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] MemberRegistrationViewModel member)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (_memberRegistration.CheckNameExitsforUpdate(member.MemberFName, member.MemberLName, member.MemberMName) != 0
                && id != member.MemberId)
                return Conflict(new { message = "Another member with the same name exists." });

            try
            {
                var automember = _mapper.Map<MemberRegistration>(member);
                automember.JoiningDate = DateTime.Now;

                var result = _memberRegistration.UpdateMember(automember);
                return CreateResponse(result > 0, new { message = "Member updated successfully." });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = ex.Message });
            }
        }

        // DELETE: api/RegisterMember/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            try
            {
                var result = _memberRegistration.DeleteMember(id);
                return CreateResponse(result, new { message = result ? "Member deleted successfully." : "Failed to delete member." });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = ex.Message });
            }
        }
    }
}
