﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using WebAppPortfolio.Data;
using WebAppPortfolio.Data.Entities;
using WebAppPortfolio.DataContracts;
using WebAppPortfolio.Helpers;
using WebAppPortfolio.Services;

namespace WebAppPortfolio
{
    public class Startup
    {
        private readonly IConfiguration _config;
        private readonly IHostingEnvironment _env;

        public Startup(IConfiguration config
        ,IHostingEnvironment env)
        {
            _config = config;
            _env = env;
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentity<PortfolioUser, IdentityRole>(cfg =>
            {
                cfg.User.RequireUniqueEmail = true;

            })
                .AddEntityFrameworkStores<PortfolioContext>();

            services.AddAuthentication()
                .AddCookie()
                .AddJwtBearer(cfg =>
                {
                    cfg.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidIssuer = _config["Tokens:Issuer"],
                        ValidAudience = _config["Tokens:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:key"]))
                    };
                });

            services.AddDbContext<PortfolioContext>(cfg  =>
            {
                cfg.UseSqlServer(_config.GetConnectionString("PortfolioCOnnectionString"));
            });

            services.AddTransient<PortfolioSeeder>();

            //services.AddSingleton<IMapper>(new Mapper(new MapperConfiguration(cfg => cfg.AddProfile<WebAppProfolioMappingProfile>())));
            AutoMapper.ServiceCollectionExtensions.UseStaticRegistration = false;
            if (services.All(a => a.ImplementationType != typeof(IMapper)))
            {
                services.AddAutoMapper();
            }

            services.AddTransient<IMailService, NullMailService>();
            
            services.AddMvc(opt =>
                {
                    if (_env.IsProduction())
                    {
                        opt.Filters.Add(new RequireHttpsAttribute());
                    }
                })
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

            app.UseAuthentication();

            app.UseMvc(cfg =>
            {
                cfg.MapRoute("Default"
                    , "{controller}/{action}/{id?}"
                    , new { controller = "App", Action = "Index" });
            });

            //if (env.IsDevelopment())
            //{
            //    using (var scope = app.ApplicationServices.CreateScope())
            //    {
            //        var seeder = scope.ServiceProvider.GetService<PortfolioSeeder>();

            //        seeder.Seed().Wait();
            //    }
            //}
        }
    }
}
