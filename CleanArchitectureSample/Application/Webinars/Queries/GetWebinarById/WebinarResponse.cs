using System;

namespace Application.Webinars.Queries.GetWebinarById;

public sealed record WebinarResponse(Guid Id, string Name, DateTime ScheduledOn);