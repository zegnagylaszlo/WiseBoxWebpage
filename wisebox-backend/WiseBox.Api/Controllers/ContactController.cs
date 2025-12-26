using Microsoft.AspNetCore.Mvc;
using WiseBox.Api.Models.DTOs;
using WiseBox.Api.Services;

namespace WiseBox.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IEmailService _emailService;
        private readonly ILogger<ContactController> _logger;

        public ContactController(IEmailService emailService, ILogger<ContactController> logger)
        {
            _emailService = emailService;
            _logger = logger;
        }

        [HttpPost]
        public async Task<ActionResult<ContactFormResponse>> SubmitContactForm(
            [FromBody] ContactFormRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new ContactFormResponse
                {
                    Success = false,
                    Message = "Érvénytelen adatok. Kérjük, ellenőrizze a mezőket."
                });
            }

            _logger.LogInformation("Processing contact form submission from {Email}", request.Email);

            var emailSent = await _emailService.SendContactFormEmailAsync(request);

            if (emailSent)
            {
                return Ok(new ContactFormResponse
                {
                    Success = true,
                    Message = "Köszönjük az üzenetet! Hamarosan felvesszük Önnel a kapcsolatot."
                });
            }
            else
            {
                _logger.LogWarning("Email sending failed for contact form from {Email}", request.Email);
                return StatusCode(500, new ContactFormResponse
                {
                    Success = false,
                    Message = "Hiba történt az üzenet küldése során. Kérjük, próbálja újra később."
                });
            }
        }

        [HttpGet("health")]
        public IActionResult HealthCheck()
        {
            return Ok(new { status = "healthy", timestamp = DateTime.UtcNow });
        }
    }
}
