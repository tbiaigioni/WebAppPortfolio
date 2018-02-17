using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using WebAppPortfolio.Data;

namespace WebAppPortfolio
{
    public class Program
    {
        public static void Main(string[] args)
        {

            var host = BuildWebHost(args);

            using (var scope = host.Services.CreateScope())
            {
                // Retrieve your DbContext isntance here
                var seeder = scope.ServiceProvider.GetService<PortfolioSeeder>();

                // place your DB seeding code here
                seeder.Seed().Wait();
            }
            host.Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
            .ConfigureAppConfiguration(SetupConfiguration)
                .UseStartup<Startup>()
                .Build();

        private static void SetupConfiguration(WebHostBuilderContext ctx, IConfigurationBuilder builder)
        {
            //Removing the default configuration options
            builder.Sources.Clear();


            builder.AddJsonFile("config.json", false, true)
                .AddEnvironmentVariables();
        }
    }
}
