using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.Facebook;
using Microsoft.AspNetCore.Identity;
using LoginWithGoogle.Models;
namespace LoginWithGoogle.Controllers
{
    public class LoginController : Controller
    {
		private readonly SignInManager<ApplicationUser> _signInManager;

		public LoginController(SignInManager<ApplicationUser> signInManager)
		{
			_signInManager = signInManager;
		}
		public IActionResult Index()
        {
            return View();
        }

        public async Task Login()
        {
            await HttpContext.ChallengeAsync(GoogleDefaults.AuthenticationScheme,
                new AuthenticationProperties
                {
                    RedirectUri = Url.Action("GoogleResponse")

                });
        }

        public async Task<IActionResult> GoogleResponse()
        {
            var result = await HttpContext.AuthenticateAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            var claims = result.Principal.Identities.FirstOrDefault().Claims.Select(claim => new
            {
                claim.Issuer,
                claim.OriginalIssuer,
                claim.Type,
                claim.Value
            });
            // return Json(claims);
            return RedirectToAction("Index", "Home",new {area= ""});
        }

        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme); // Sign out from cookies
            return RedirectToAction("Index", "Home");
        }

        public IActionResult LoginWithFacebook()
        {
            var properties = new AuthenticationProperties { RedirectUri = "/" };
            return Challenge(properties, FacebookDefaults.AuthenticationScheme);
        }

		[HttpPost]
		public IActionResult LoginWithMicrosoft()
		{
			var redirectUrl = Url.Action("Index", "Home");
			var properties = _signInManager.ConfigureExternalAuthenticationProperties("Microsoft", redirectUrl);
			return Challenge(properties, "Microsoft");
		}
	}
}
