using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppPortfolio.Data;
using WebAppPortfolio.DataContracts;

namespace WebAppPortfolio.Helpers
{
    public class RepositoryFactories
    {
        private readonly IDictionary<Type, Func<PortfolioContext, object>> _repositoryFactories;


        private IDictionary<Type,Func<PortfolioContext,object>> GetPortfolioFactories()
        {
            return new Dictionary<Type, Func<PortfolioContext, object>>
            {
                {typeof(IProductsRepository),dbContext=> new ProductsRepository(dbContext) },
                {typeof(IOrdersRepository),dbContext=> new OrdersRepository(dbContext) },
            };
        }

        public RepositoryFactories()
        {
            this._repositoryFactories = GetPortfolioFactories();
        }

        public RepositoryFactories(IDictionary<Type,Func<PortfolioContext,object>> factories)
        {
            _repositoryFactories = factories;
        }


        public Func<PortfolioContext,object> GetRepositoryFactory<T>()
        {
            _repositoryFactories.TryGetValue(typeof(T), out var factory);
            return factory;
        }

        public Func<PortfolioContext,object> GetRepositoryFactoryForEntityType<T>() where T : class
        {
            return GetRepositoryFactory<T>() ?? DefaultEntityRepositoryFactory<T>();
        }

        protected virtual Func<PortfolioContext,object> DefaultEntityRepositoryFactory<T>() where T : class
        {
            return dbContext => new EFRepository<T>(dbContext);
        }
    }
}
