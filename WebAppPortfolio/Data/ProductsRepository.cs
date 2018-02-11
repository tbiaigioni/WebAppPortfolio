﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppPortfolio.DataContracts;
using WebAppPortfolio.Entities;

namespace WebAppPortfolio.Data
{
    public class ProductsRepository : EFRepository<Product>,IProductsRepository
    {
        public ProductsRepository(PortfolioContext dbContext) : base(dbContext)
        {
        }
        

        public IQueryable<Product> GetAllProducts()
        {
            return DbContext.Products.OrderBy(p => p.Title);
        }
    }
}