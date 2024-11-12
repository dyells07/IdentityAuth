using SoapCore;
using SoapInNetCore.BusinessLogic;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSoapCore();
builder.Services.AddScoped<ISoapService, SoapService>(); 

var app = builder.Build();

app.UseRouting();

app.UseEndpoints(endpoints =>
{
    endpoints.UseSoapEndpoint<ISoapService>("/Service.asmx", new SoapEncoderOptions(), SoapSerializer.XmlSerializer);
});

app.Run();
