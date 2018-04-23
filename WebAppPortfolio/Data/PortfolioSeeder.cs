using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using WebAppPortfolio.Data.Entities;
using WebAppPortfolio.Entities;

namespace WebAppPortfolio.Data
{
    public class PortfolioSeeder
    {
        private readonly PortfolioContext _ctx;
        private readonly IHostingEnvironment _hosting;
        private readonly UserManager<PortfolioUser> _userManager;

        public PortfolioSeeder(PortfolioContext ctx
            , IHostingEnvironment hosting
            , UserManager<PortfolioUser> userManager)
        {
            _ctx = ctx;
            _hosting = hosting;
            _userManager = userManager;
        }


        public async Task Seed()
        {
            _ctx.Database.EnsureCreated();

            var user = await _userManager.FindByEmailAsync("tbiagioni1983@gmail.com");
            if (user == null)
            {
                user = new PortfolioUser()
                {
                    FirstName = "Tom",
                    LastName = "Biagioni",
                    UserName = "tbiagioni1983@gmail.com",
                    Email = "tbiagioni1983@gmail.com"
                };

                var result = await _userManager.CreateAsync(user, "P@ssw0rd!");
                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Failed Creating User");
                }
            }

            if (_ctx.Products.Any()) return;
            //Create Sample Data
            var filepath = Path.Combine(_hosting.ContentRootPath, "Data/art.json");
            var json = File.ReadAllText(filepath);
            var products = JsonConvert.DeserializeObject<IEnumerable<Product>>(json);
            _ctx.Products.AddRange(products);

            var order = new Order()
            {
                OrderDate = DateTime.Now,
                OrderNumber = "12345",
                User = user,
                Items = new List<OrderItem>()
                {
                    new OrderItem()
                    {
                        Product = products.First(),
                        Quantity = 5,
                        UnitPrice = products.First().Price
                    }
                }
            };
            List<Camp> _sample = new List<Camp>
            {
                new Camp()
                {
                    Name = "Your First Code Camp",
                    Moniker = "ATL2016",
                    EventDate = DateTime.Today.AddDays(45),
                    Length = 1,
                    Description = "This is the first code camp",
                    Location = new Location()
                    {
                        Address1 = "123 Main Street",
                        CityTown = "Atlanta",
                        StateProvince = "GA",
                        PostalCode = "30303",
                        Country = "USA"
                    },
                    Speakers = new List<Speaker>
                    {
                        new Speaker()
                        {
                            Name = "Shawn Wildermuth",
                            Bio = "I'm a speaker",
                            CompanyName = "Wilder Minds LLC",
                            GitHubName = "shawnwildermuth",
                            TwitterName = "shawnwildermuth",
                            PhoneNumber = "555-1212",
                            HeadShotUrl = "http://wilderminds.com/images/minds/shawnwildermuth.jpg",
                            WebsiteUrl = "http://wildermuth.com",
                            Talks = new List<Talk>()
                            {
                                new Talk()
                                {
                                    Title = "How to do ASP.NET Core",
                                    Abstract = "How to do ASP.NET Core",
                                    Category = "Web Development",
                                    Level = "100",
                                    Prerequisites = "C# Experience",
                                    Room = "245",
                                    StartingTime = DateTime.Parse("14:30")
                                },
                                new Talk()
                                {
                                    Title = "How to do Bootstrap 4",
                                    Abstract = "How to do Bootstrap 4",
                                    Category = "Web Development",
                                    Level = "100",
                                    Prerequisites = "CSS Experience",
                                    Room = "246",
                                    StartingTime = DateTime.Parse("13:00")
                                },
                            }
                        },
                        new Speaker()
                        {
                            Name = "Resa Wildermuth",
                            Bio = "I'm a speaker",
                            CompanyName = "Wilder Minds LLC",
                            GitHubName = "resawildermuth",
                            TwitterName = "resawildermuth",
                            PhoneNumber = "555-1212",
                            HeadShotUrl = "http://wilderminds.com/images/minds/resawildermuth.jpg",
                            WebsiteUrl = "http://wildermuth.com",
                            Talks = new List<Talk>()
                            {
                                new Talk()
                                {
                                    Title = "Managing a Consulting Business",
                                    Abstract = "Managing a Consulting Business",
                                    Category = "Soft Skills",
                                    Level = "100",
                                    Room = "230",
                                    StartingTime = DateTime.Parse("10:30")
                                }
                            }
                        }
                    }
                }
            };
            _ctx.Orders.Add(order);
            _ctx.AddRange(_sample);
            _ctx.SaveChanges();
        }
    }
}