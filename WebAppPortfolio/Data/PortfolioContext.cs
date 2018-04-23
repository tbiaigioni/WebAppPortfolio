using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using WebAppPortfolio.Data.Entities;
using WebAppPortfolio.Entities;

namespace WebAppPortfolio.Data
{
    public class PortfolioContext : IdentityDbContext<PortfolioUser>
    {

        public PortfolioContext(DbContextOptions<PortfolioContext> options) : base (options)
        {

        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Camp> Camps { get; set; }
        public DbSet<Speaker> Speakers { get; set; }
        public DbSet<Talk> Talks { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Camp>()
                .Property(c => c.Moniker)
                .IsRequired();
            builder.Entity<Camp>()
                .Property(c => c.RowVersion)
                .ValueGeneratedOnAddOrUpdate()
                .IsConcurrencyToken();
            builder.Entity<Speaker>()
                .Property(c => c.RowVersion)
                .ValueGeneratedOnAddOrUpdate()
                .IsConcurrencyToken();
            builder.Entity<Talk>()
                .Property(c => c.RowVersion)
                .ValueGeneratedOnAddOrUpdate()
                .IsConcurrencyToken();
        }
    }
}
