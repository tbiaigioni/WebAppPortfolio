using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppPortfolio.Entities;

namespace WebAppPortfolio.Data
{
    public class PortfolioContext : DbContext
    {

        public PortfolioContext(DbContextOptions<PortfolioContext> options) : base (options)
        {

        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
    }
}
