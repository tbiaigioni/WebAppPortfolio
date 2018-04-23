using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppPortfolio.DataContracts
{
    public interface IPortfolioUow
    {

        void Commit();
        Task<bool> SaveAllAsync();

        IProductsRepository Products { get; }
        IOrdersRepository Orders { get; }
        ICampsRepository Camps { get; }
        ISpeakersRepository Speakers { get; }
        ITalksRepository Talks { get; }
    }
}
