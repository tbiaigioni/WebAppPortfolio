using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppPortfolio.DataContracts;
using WebAppPortfolio.Helpers;

namespace WebAppPortfolio.Data
{
    public class PortfolioUow : IPortfolioUow, IDisposable
    {
        //Add Entity Repositories Here
        public IProductsRepository Products => GetRepository<IProductsRepository>();
        public IOrdersRepository Orders => GetRepository<IOrdersRepository>();
        public ICampsRepository Camps => GetRepository<ICampsRepository>();
        public ISpeakersRepository Speakers => GetRepository<ISpeakersRepository>();
        public ITalksRepository Talks => GetRepository<ITalksRepository>();

        public PortfolioUow(PortfolioContext context,IRepositoryProvider repositoryProvider)
        {
            _context = context;
            repositoryProvider.DbContext = context;
            RepositoryProvider = repositoryProvider;
        }
 
        protected IRepositoryProvider RepositoryProvider { get; set; }

        

        private readonly PortfolioContext _context;

        private T GetRepository<T>() where T : class
        {
            return RepositoryProvider.GetRepository<T>();
        }

        public void Commit()
        {
            _context.SaveChanges();
        }

        public async Task<bool> SaveAllAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {

            if (disposing)
            {
                _context?.Dispose();
            }

        }
    }
}
