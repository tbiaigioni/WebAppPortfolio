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
            ,IHostingEnvironment hosting
            ,UserManager<PortfolioUser> userManager)
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

                var result = await _userManager.CreateAsync(user,"P@ssw0rd!");
                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Failed Creating User");
                }
            }

            if (_ctx.Products.Any()) return;
            //Create Sample Data
            var filepath = Path.Combine(_hosting.ContentRootPath,"Data/art.json");
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

            _ctx.Orders.Add(order);
            _ctx.SaveChanges();
        }
    }
}
