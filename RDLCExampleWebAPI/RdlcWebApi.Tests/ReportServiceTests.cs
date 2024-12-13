using System;
using System.Collections.Generic;
using System.IO;
using Xunit;
using Moq;
using RdlcWebApi.Services;

public class ReportServiceTests
{
    private readonly string _testDirectory;
    private readonly ReportService _reportService;

    public ReportServiceTests()
    {
        _testDirectory = Path.Combine(Path.GetTempPath(), "ReportTests");
        Directory.CreateDirectory(_testDirectory);

        var mockAssembly = new Mock<Assembly>();
        mockAssembly.Setup(a => a.Location).Returns(_testDirectory);
        _reportService = new ReportService();
    }

    [Fact]
    public void GenerateReportAsync_ShouldThrowFileNotFoundException_WhenRdlcFileDoesNotExist()
    {
        // Arrange
        var reportName = "NonExistentReport";
        var reportType = "PDF";

        // Act & Assert
        var exception = Assert.Throws<FileNotFoundException>(() =>
            _reportService.GenerateReportAsync(reportName, reportType));

        Assert.Contains($"RDLC file '{reportName}.rdlc' not found", exception.Message);
    }

    [Fact]
    public void GenerateReportAsync_ShouldThrowArgumentException_ForUnsupportedReportType()
    {
        // Arrange
        var reportName = "SampleReport";
        var reportType = "UNSUPPORTED";

        // Create a sample RDLC file
        var rdlcFilePath = Path.Combine(_testDirectory, "ReportFiles", "SampleReport.rdlc");
        Directory.CreateDirectory(Path.GetDirectoryName(rdlcFilePath) ?? string.Empty);
        File.WriteAllText(rdlcFilePath, "<RDLC Content>");

        // Act & Assert
        var exception = Assert.Throws<ArgumentException>(() =>
            _reportService.GenerateReportAsync(reportName, reportType));

        Assert.Contains("Unsupported report type", exception.Message);
    }

    [Fact]
    public void GenerateReportAsync_ShouldGenerateReportSuccessfully_WhenValidInputsProvided()
    {
        // Arrange
        var reportName = "SampleReport";
        var reportType = "PDF";

        // Create a sample RDLC file
        var rdlcFilePath = Path.Combine(_testDirectory, "ReportFiles", "SampleReport.rdlc");
        Directory.CreateDirectory(Path.GetDirectoryName(rdlcFilePath) ?? string.Empty);
        File.WriteAllText(rdlcFilePath, "<RDLC Content>");

        // Act
        var result = _reportService.GenerateReportAsync(reportName, reportType);

        // Assert
        Assert.NotNull(result);
        Assert.True(result.Length > 0, "Generated report should not be empty.");
    }

    [Fact]
    public void GetSampleUserData_ShouldReturnListOfUsers()
    {
        // Arrange
        var sampleDataMethod = typeof(ReportService).GetMethod("GetSampleUserData",
            System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Static);

        // Act
        var result = sampleDataMethod.Invoke(null, null) as List<UserDto>;

        // Assert
        Assert.NotNull(result);
        Assert.Equal(6, result.Count);
    }

    // Cleanup
    public void Dispose()
    {
        if (Directory.Exists(_testDirectory))
        {
            Directory.Delete(_testDirectory, true);
        }
    }
}
