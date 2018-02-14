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
        //private readonly ILogger<ProductsRepository> logger;


        public ProductsRepository(PortfolioContext dbContext) : base(dbContext)
        {

        }


        

        public IQueryable<Product> GetAllProducts()
        {
            try
            {
               // logger.LogInformation($"Got All Products");
                return DbContext.Products.OrderBy(p => p.Title);
            }
            catch (Exception ex)
            {

               // logger.LogError($"Failed Getting All Products : {ex}");
                return null;
            }
            
        }

        public IQueryable<Product> GetProductsByCategory(string category)
        {

            try
            {
                return DbContext.Products.Where(p => p.Category == category);
            }
            catch (Exception ex)
            {

                //logger.LogError($"Failed Getting Products By Category : {ex}");
                return null;
            }
            
        }
    }
}
