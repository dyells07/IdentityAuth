using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Webinars.Commands.CreateWebinar;
using Application.Webinars.Queries.GetWebinarById;
using Mapster;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers;

/// <summary>
/// Represents the webinars controller.
/// </summary>
public sealed class WebinarsController : ApiController
{
    /// <summary>
    /// Gets the webinar with the specified identifier, if it exists.
    /// </summary>
    /// <param name="webinarId">The webinar identifier.</param>
    /// <param name="cancellationToken">The cancellation token.</param>
    /// <returns>The webinar with the specified identifier, if it exists.</returns>
    [HttpGet("{webinarId:guid}")]
    [ProducesResponseType(typeof(WebinarResponse), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetWebinar(Guid webinarId, CancellationToken cancellationToken)
    {
        var query = new GetWebinarByIdQuery(webinarId);

        var webinar = await Sender.Send(query, cancellationToken);

        return Ok(webinar);
    }

    /// <summary>
    /// Creates a new webinar based on the specified request.
    /// </summary>
    /// <param name="request">The create webinar request.</param>
    /// <param name="cancellationToken">The cancellation token.</param>
    /// <returns>The identifier of the newly created webinar.</returns>
    [HttpPost]
    [ProducesResponseType(typeof(Guid), StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> CreateWebinar(
        [FromBody] CreateWebinarRequest request,
        CancellationToken cancellationToken)
    {
        var command = request.Adapt<CreateWebinarCommand>();

        var webinarId = await Sender.Send(command, cancellationToken);

        return CreatedAtAction(nameof(GetWebinar), new { webinarId }, webinarId);
    }
}