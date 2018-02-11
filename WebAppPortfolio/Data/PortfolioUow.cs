﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppPortfolio.DataContracts;
using WebAppPortfolio.Helpers;

namespace WebAppPortfolio.Data
{
    public class PortfolioUow : IPortfolioUow, IDisposable
    {

        public PortfolioUow(PortfolioContext context,IRepositoryProvider repositoryProvider)
        {
            this.context = context;
            repositoryProvider.DbContext = context;
            RepositoryProvider = repositoryProvider;
        }


        public IProductsRepository Products => GetRepository<IProductsRepository>();
        protected IRepositoryProvider RepositoryProvider { get; set; }
        private PortfolioContext context;

        private T GetRepository<T>() where T : class
        {
            return RepositoryProvider.GetRepository<T>();
        }

        public void Commit()
        {
            context.SaveChanges();
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
                context?.Dispose();
            }

        }
    }
}
