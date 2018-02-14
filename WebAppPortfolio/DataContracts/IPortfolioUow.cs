using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppPortfolio.DataContracts
{
    public interface IPortfolioUow
    {

        void Commit();


        IProductsRepository Products { get; }
        IOrdersRepository Orders { get; }
    }
}
