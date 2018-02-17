using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppPortfolio.Data;
using WebAppPortfolio.DataContracts;

namespace WebAppPortfolio.Helpers
{
    public class RepositoryProvider : IRepositoryProvider
    {

        public PortfolioContext DbContext { get; set; }

        protected Dictionary<Type,object> Repositories { get; private set; }
        private readonly RepositoryFactories _repositoryFactories;

        public RepositoryProvider(RepositoryFactories repositoryFactories)
        {
            this._repositoryFactories = repositoryFactories;

            Repositories = new Dictionary<Type, object>();

        }


        public T GetRepository<T>(Func<PortfolioContext, object> factory = null) where T : class
        {
            object repoObj;
            Repositories.TryGetValue(typeof(T), out repoObj);
            if (repoObj != null)
            {
                return (T)repoObj;
            }


            return MakeRepository<T>(factory, DbContext);
        }

        public IRepository<T> GetRepositoryForEntityType<T>() where T : class
        {
            return GetRepository<IRepository<T>>(_repositoryFactories.GetRepositoryFactoryForEntityType<T>());
        }

        public void SetRepository<T>(T repository)
        {
            Repositories[typeof(T)] = repository;
        }

        protected virtual T MakeRepository<T>(Func<PortfolioContext, object> factory, PortfolioContext context)
        {
            var f = factory ?? _repositoryFactories.GetRepositoryFactory<T>();
            if (f == null)
            {
                throw new NotImplementedException("No factory for repository type," + typeof(T).FullName);
            }
            var repo = (T)f(context);
            Repositories[typeof(T)] = repo;
            return repo;

        }
    }
}
