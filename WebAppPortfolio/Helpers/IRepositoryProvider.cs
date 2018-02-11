using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppPortfolio.Data;
using WebAppPortfolio.DataContracts;

namespace WebAppPortfolio.Helpers
{
    public interface IRepositoryProvider
    {

        PortfolioContext DbContext { get; set; }

        IRepository<T> GetRepositoryForEntityType<T>() where T : class;

        T GetRepository<T>(Func<PortfolioContext, object> factory = null) where T : class;

        void SetRepository<T>(T repository);
    }
}
