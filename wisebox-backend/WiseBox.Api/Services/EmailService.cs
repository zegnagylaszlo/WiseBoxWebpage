using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using WiseBox.Api.Models.DTOs;

namespace WiseBox.Api.Services
{
    public class EmailService : IEmailService
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger<EmailService> _logger;

        public EmailService(IConfiguration configuration, ILogger<EmailService> logger)
        {
            _configuration = configuration;
            _logger = logger;
        }

        public async Task<bool> SendContactFormEmailAsync(ContactFormRequest request)
        {
            try
            {
                var message = new MimeMessage();
                message.From.Add(new MailboxAddress(
                    _configuration["EmailSettings:SenderName"],
                    _configuration["EmailSettings:SenderEmail"]
                ));
                message.To.Add(new MailboxAddress(
                    "WiseBox Info",
                    _configuration["EmailSettings:RecipientEmail"]
                ));
                message.Subject = $"Új kapcsolatfelvételi kérés: {request.Name} ({request.Company})";

                var bodyBuilder = new BodyBuilder
                {
                    HtmlBody = $@"
                        <html>
                        <body style='font-family: Arial, sans-serif;'>
                            <h2 style='color: #0A7B7F;'>Új kapcsolatfelvételi kérés</h2>
                            <table style='border-collapse: collapse; width: 100%; max-width: 600px;'>
                                <tr>
                                    <td style='padding: 10px; border: 1px solid #ddd; background-color: #f8f9fa; font-weight: bold;'>Név:</td>
                                    <td style='padding: 10px; border: 1px solid #ddd;'>{request.Name}</td>
                                </tr>
                                <tr>
                                    <td style='padding: 10px; border: 1px solid #ddd; background-color: #f8f9fa; font-weight: bold;'>Email:</td>
                                    <td style='padding: 10px; border: 1px solid #ddd;'><a href='mailto:{request.Email}'>{request.Email}</a></td>
                                </tr>
                                <tr>
                                    <td style='padding: 10px; border: 1px solid #ddd; background-color: #f8f9fa; font-weight: bold;'>Telefon:</td>
                                    <td style='padding: 10px; border: 1px solid #ddd;'>{request.Phone}</td>
                                </tr>
                                <tr>
                                    <td style='padding: 10px; border: 1px solid #ddd; background-color: #f8f9fa; font-weight: bold;'>Cég:</td>
                                    <td style='padding: 10px; border: 1px solid #ddd;'>{request.Company}</td>
                                </tr>
                                <tr>
                                    <td style='padding: 10px; border: 1px solid #ddd; background-color: #f8f9fa; font-weight: bold;'>Üzenet:</td>
                                    <td style='padding: 10px; border: 1px solid #ddd;'>{request.Message.Replace("\n", "<br>")}</td>
                                </tr>
                                <tr>
                                    <td style='padding: 10px; border: 1px solid #ddd; background-color: #f8f9fa; font-weight: bold;'>GDPR Hozzájárulás:</td>
                                    <td style='padding: 10px; border: 1px solid #ddd;'>
                                        <span style='color: #7AC87D; font-weight: bold;'>✓ Elfogadva</span>
                                        <br><small style='color: #5A6C7D;'>Időpont: {DateTime.UtcNow:yyyy-MM-dd HH:mm:ss} UTC</small>
                                    </td>
                                </tr>
                            </table>
                            <p style='margin-top: 20px; color: #5A6C7D;'>
                                <em>Ez az email a wisebox.hu weboldalon keresztül lett elküldve. A felhasználó elfogadta az adatkezelési tájékoztatót.</em>
                            </p>
                        </body>
                        </html>
                    "
                };

                message.Body = bodyBuilder.ToMessageBody();

                using var client = new SmtpClient();
                var port = int.Parse(_configuration["EmailSettings:SmtpPort"] ?? "587");
                var secureSocketOption = port == 465
                    ? SecureSocketOptions.SslOnConnect
                    : SecureSocketOptions.StartTls;

                await client.ConnectAsync(
                    _configuration["EmailSettings:SmtpServer"],
                    port,
                    secureSocketOption
                );

                await client.AuthenticateAsync(
                    _configuration["EmailSettings:SmtpUsername"],
                    _configuration["EmailSettings:SmtpPassword"]
                );

                await client.SendAsync(message);
                await client.DisconnectAsync(true);

                _logger.LogInformation("Contact form email sent successfully to {Recipient} from {Sender}",
                    request.Email, request.Name);

                return true;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to send contact form email from {Sender}", request.Email);
                return false;
            }
        }
    }
}
