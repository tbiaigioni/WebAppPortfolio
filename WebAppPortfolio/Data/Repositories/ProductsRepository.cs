using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppPortfolio.DataContracts;
using WebAppPortfolio.Entities;

namespace WebAppPortfolio.Data
{
    public class ProductsRepository : EFRepository<Product>,IProductsRepository
    {
        private readonly ILogger<ProductsRepository> logger;

        public ProductsRepository(PortfolioContext dbContext,ILogger<ProductsRepository> logger) : base(dbContext)
        {
            this.logger = logger;
        }
        

        public IQueryable<Product> GetAllProducts()
        {
            return DbContext.Products.OrderBy(p => p.Title);
        }

        public IQueryable<Product> GetProductsByCategory(string category)
        {
            return DbContext.Products.Where(p => p.Category == category);
        }
    }
}
