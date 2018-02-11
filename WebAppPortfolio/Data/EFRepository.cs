using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppPortfolio.DataContracts;

namespace WebAppPortfolio.Data
{
    public class EFRepository<T> : IRepository<T> where T : class
    {

        protected PortfolioContext DbContext { get; set; }
        protected DbSet<T> DbSet { get; set; }

        public EFRepository(PortfolioContext dbContext)
        {
            DbContext = dbContext ?? throw new ArgumentNullException("dbContext");
            DbSet = DbContext.Set<T>();
        }


        public void Add(T entity)
        {
            EntityEntry dbEntityEntry = DbContext.Entry(entity);
            if (dbEntityEntry.State != EntityState.Detached)
            {
                dbEntityEntry.State = EntityState.Added;
            }else
            {
                DbSet.Add(entity);
            }
        }

        public void Delete(T entity)
        {
            EntityEntry dbEntityEntry = DbContext.Entry(entity);
            if (dbEntityEntry.State != EntityState.Deleted)
            {
                dbEntityEntry.State = EntityState.Deleted;
            }
            else
            {
                DbSet.Attach(entity);
                DbSet.Remove(entity);
            }
        }

        public void Delete(int id)
        {
            var entity = GetById(id);
            if (entity == null) return;
            Delete(entity);
        }

        public IQueryable<T> GetAll()
        {
            return DbSet;
        }

        public T GetById(int id)
        {
            return DbSet.Find(id);
        }

        public void Update(T entity)
        {
            EntityEntry dbEntityEntry = DbContext.Entry(entity);
            if (dbEntityEntry.State != EntityState.Detached)
            {
                DbSet.Attach(entity);
            }
            dbEntityEntry.State = EntityState.Modified;
        }
    }
}
