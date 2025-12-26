using WiseBox.Api.Models.DTOs;

namespace WiseBox.Api.Services
{
    public interface IEmailService
    {
        Task<bool> SendContactFormEmailAsync(ContactFormRequest request);
    }
}
