using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppPortfolio.Entities;

namespace WebAppPortfolio.DataContracts
{
    public interface IProductsRepository :  IRepository<Product>
    {

        IQueryable<Product> GetAllProducts();
    }
}
