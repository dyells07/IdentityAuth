using AspNetCore.Reporting;
using RdlcWebApi.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text;

namespace RdlcWebApi.Services
{
    public interface IReportService
    {
        byte[] GenerateReportAsync(string reportName, string reportType);
    }

    public class ReportService : IReportService
    {
        private static readonly string FileDirPath = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location) ?? string.Empty;

        public byte[] GenerateReportAsync(string reportName, string reportType)
        {
            string rdlcFilePath = Path.Combine(FileDirPath, "ReportFiles", $"{reportName}.rdlc");

            if (!File.Exists(rdlcFilePath))
            {
                throw new FileNotFoundException($"RDLC file '{reportName}.rdlc' not found at '{rdlcFilePath}'.");
            }

            LocalReport report = new LocalReport(rdlcFilePath);

            var userList = GetSampleUserData();
            report.AddDataSource("dsUsers", userList);

            Dictionary<string, string> parameters = new Dictionary<string, string>();

            var renderType = GetRenderType(reportType);
            var result = report.Execute(renderType, 1, parameters);

            return result.MainStream;
        }

        private static List<UserDto> GetSampleUserData()
        {
            return new List<UserDto>
            {
                new UserDto { FirstName = "Dipesh", LastName = "Pangeni", Email = "Dipesh@gmail.com", Phone = "+976111111111" },
                new UserDto { FirstName = "Rakesh", LastName = "KC", Email = "RakeshKC@gmail.com", Phone = "+976222222222" },
                new UserDto { FirstName = "Sita", LastName = "Dahal", Email = "SitaD@gmail.com", Phone = "+976333333333" },
                new UserDto { FirstName = "Ram", LastName = "Shrestha", Email = "Ram@gmail.com", Phone = "+976444444444" },
                new UserDto { FirstName = "Krishna", LastName = "Aryal", Email = "KrishnaA@gmail.com", Phone = "+976555555555" },
                new UserDto { FirstName = "Gita", LastName = "Pandey", Email = "Gita@gmail.com", Phone = "+976666666666" }
            };
        }

        private static RenderType GetRenderType(string reportType) =>
            reportType?.ToUpper() switch
            {
                "PDF" => RenderType.Pdf,
                "XLS" => RenderType.Excel,
                "WORD" => RenderType.Word,
                _ => throw new ArgumentException($"Unsupported report type: {reportType}.")
            };
    }
}
