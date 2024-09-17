using FluentValidation;

namespace Application.Webinars.Commands.CreateWebinar;

public sealed class CreateWebinarCommandValidator : AbstractValidator<CreateWebinarCommand>
{
    public CreateWebinarCommandValidator()
    {
        RuleFor(x => x.Name).NotEmpty();

        RuleFor(x => x.ScheduledOn).NotEmpty();
    }
}