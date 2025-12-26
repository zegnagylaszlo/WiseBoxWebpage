using WiseBox.Api.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container (Production deployment with CORS for new.wisebox.hu)
builder.Services.AddControllers();

// Register Email Service
builder.Services.AddScoped<IEmailService, EmailService>();

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowWiseBoxFrontend", policy =>
    {
        policy.WithOrigins(
            "http://localhost:3000",                    // Local development
            "https://icy-meadow-020538203.2.azurestaticapps.net",  // Dev environment
            "https://black-water-0950ee003.5.azurestaticapps.net",  // Production Static Web App
            "https://new.wisebox.hu",                   // Custom domain
            "https://wisebox-api-prod-cfazf6h4h6gma5fd.northeurope-01.azurewebsites.net"  // Backend URL (for direct testing)
        )
        .AllowAnyMethod()
        .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline
app.UseHttpsRedirection();
app.UseCors("AllowWiseBoxFrontend");
app.UseAuthorization();
app.MapControllers();

app.Run();
