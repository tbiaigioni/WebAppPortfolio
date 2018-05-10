using System;
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
using Microsoft.AspNetCore.Mvc.Versioning;
using Microsoft.AspNetCore.Mvc.Versioning.Conventions;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
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
            , IHostingEnvironment env)
        {
            _config = config;
            _env = env;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentity<PortfolioUser, IdentityRole>(cfg => { cfg.User.RequireUniqueEmail = true; })
                .AddEntityFrameworkStores<PortfolioContext>();

            services.AddMemoryCache();
            services.AddAuthentication()
                .AddCookie()
                .AddJwtBearer(cfg =>
                {
                    //AutomaticAuthenticate = true,
                    //AutomaticChallenge = true,
                    cfg.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidIssuer = _config["Tokens:Issuer"],
                        ValidAudience = _config["Tokens:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:key"])),
                        ValidateIssuerSigningKey = true,
                        ValidateLifetime = true,
                        
                    };
                });

            services.AddDbContext<PortfolioContext>(cfg =>
            {
                cfg.UseSqlServer(_env.IsProduction()
                    ? _config.GetConnectionString("PortfolioConnectionString")
                    : _config.GetConnectionString("lclConnectionString"));
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
                    if(!_env.IsProduction())
                    {
                        opt.SslPort = 44388;
                    }
                    if (_env.IsProduction())
                    {
                        opt.Filters.Add(new RequireHttpsAttribute());
                    }
                })
                .AddJsonOptions(opt => opt.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);


            services.AddScoped<IRepositoryProvider, RepositoryProvider>();
            services.AddScoped<IPortfolioUow, PortfolioUow>();
            services.AddSingleton<RepositoryFactories>();

            services.AddApiVersioning(cfg =>
            {
                cfg.DefaultApiVersion = new ApiVersion(1, 1);
                cfg.AssumeDefaultVersionWhenUnspecified = true;
                cfg.ReportApiVersions = true;
                cfg.ApiVersionReader = new HeaderApiVersionReader("X-HalcyonPattern-Version");

                //cfg.Conventions.Controller<TalksController>()
                //  .HasApiVersion(new ApiVersion(1, 0))
                //  .HasApiVersion(new ApiVersion(1, 1))
                //  .HasApiVersion(new ApiVersion(2, 0))
                //  .Action(m => m.Post(default(string), default(int), default(TalkModel)))
                //    .MapToApiVersion(new ApiVersion(1, 1));
            });

            services.AddCors(cfg =>
            {
                cfg.AddPolicy("AnyGET", bldr =>
                {
                    bldr.AllowAnyHeader()
                        .WithMethods("GET")
                        .AllowAnyOrigin();
                });
            });
            services.AddAuthorization(cfg =>
            {
                cfg.AddPolicy("SuperUsers", p => p.RequireClaim("SuperUser", "True"));
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/error");
            }

            loggerFactory.AddConsole(_config.GetSection("Logging"));
            loggerFactory.AddDebug();
            app.UseStaticFiles();


            app.UseAuthentication();

            app.UseMvc(cfg =>
            {
                cfg.MapRoute("Default"
                    , "{controller}/{action}/{id?}"
                    , new {controller = "App", Action = "Index"});
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