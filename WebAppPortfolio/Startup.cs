using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using WebAppPortfolio.Data;
using WebAppPortfolio.DataContracts;
using WebAppPortfolio.Helpers;
using WebAppPortfolio.Services;

namespace WebAppPortfolio
{
    public class Startup
    {
        private readonly IConfiguration config;

        public Startup(IConfiguration config)
        {
            this.config = config;
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddDbContext<PortfolioContext>(cfg  =>
            {
                cfg.UseSqlServer(config.GetConnectionString("PortfolioCOnnectionString"));
            });

            services.AddAutoMapper();

            services.AddTransient<IMailService, NullMailService>();
            services.AddTransient<PortfolioSeeder>();
            services.AddMvc()
                        .AddJsonOptions(opt => opt.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);

            
            services.AddScoped<IRepositoryProvider, RepositoryProvider>();
            services.AddScoped<IPortfolioUow, PortfolioUow>();
            services.AddSingleton<RepositoryFactories>();


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if(env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/error");
            }
            

            app.UseStaticFiles();


            app.UseMvc(cfg =>
            {
                cfg.MapRoute("Default"
                    , "{controller}/{action}/{id?}"
                    , new { controller = "App", Action = "Index" });
            });

            if (env.IsDevelopment())
            {
                using (var scope = app.ApplicationServices.CreateScope())
                {
                    var seeder = scope.ServiceProvider.GetService<PortfolioSeeder>();

                    seeder.Seed();
                }
            }
        }
    }
}
