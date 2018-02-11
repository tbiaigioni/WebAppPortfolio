using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using WebAppPortfolio.Entities;

namespace WebAppPortfolio.Data
{
    public class PortfolioSeeder
    {

        private readonly PortfolioContext ctx;
        private readonly IHostingEnvironment hosting;

        public PortfolioSeeder(PortfolioContext ctx,IHostingEnvironment hosting)
        {
            this.ctx = ctx;
            this.hosting = hosting;
        }


        public void Seed()
        {
            ctx.Database.EnsureCreated();

            if (!ctx.Products.Any())
            {
                //Create Sample Data
                var filepath = Path.Combine(hosting.ContentRootPath,"Data/art.json");
                var json = File.ReadAllText(filepath);
                var products = JsonConvert.DeserializeObject<IEnumerable<Product>>(json);
                ctx.Products.AddRange(products);

                var order = new Order()
                {
                    OrderDate = DateTime.Now,
                    OrderNumber = "12345",
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

                ctx.Orders.Add(order);
                ctx.SaveChanges();

            }
        }
    }
}
