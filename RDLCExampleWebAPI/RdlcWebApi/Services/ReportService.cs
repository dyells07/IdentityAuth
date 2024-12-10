using AspNetCore.Reporting;
using RdlcWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace RdlcWebApi.Services
{
    public interface IReportService
    {
        byte[] GenerateReportAsync(string reportName, string reportType);
    }

    public class ReportService : IReportService
    {
        public byte[] GenerateReportAsync(string reportName, string reportType)
        {
            string fileDirPath = Assembly.GetExecutingAssembly().Location.Replace("RdlcWebApi.dll", string.Empty);
            string rdlcFilePath = string.Format("{0}ReportFiles\\{1}.rdlc", fileDirPath, reportName);

            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            Encoding.GetEncoding("utf-8");

            LocalReport report = new LocalReport(rdlcFilePath);

           // List<UserDto> userList = new List<UserDto>();

            var userList = new List<UserDto>
            {
                new UserDto { FirstName = "Dipesh", LastName = "Pangeni", Email = "Dipesh@gmail.com", Phone = "+976111111111" },
                new UserDto { FirstName = "Rakesh", LastName = "KC", Email = "RakeshKC@gmail.com", Phone = "+976222222222" },
                new UserDto { FirstName = "Sita", LastName = "Dahal", Email = "SitaD@gmail.com", Phone = "+976333333333" },
                new UserDto { FirstName = "Ram", LastName = "Shrestha", Email = "RamS@gmail.com", Phone = "+976444444444" },
                new UserDto { FirstName = "Krishna", LastName = "Aryal", Email = "KrishnaA@gmail.com", Phone = "+976555555555" },
                new UserDto { FirstName = "Gita", LastName = "Pandey", Email = "GitaP@gmail.com", Phone = "+976666666666" }
            };

            report.AddDataSource("dsUsers", userList);

            Dictionary<string, string> parameters = new Dictionary<string, string>();
            var result = report.Execute(GetRenderType(reportType), 1, parameters);

            return result.MainStream;            
        }

        private RenderType GetRenderType(string reportType)
        {
            var renderType = RenderType.Pdf;

            switch(reportType.ToUpper())
            {
                default:
                case "PDF":
                    renderType = RenderType.Pdf;
                    break;
                case "XLS":
                    renderType = RenderType.Excel;
                    break;
                case "WORD":
                    renderType = RenderType.Word;
                    break;
            }

            return renderType;
        }

    }
}
