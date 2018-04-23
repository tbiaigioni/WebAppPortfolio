using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAppPortfolio.Data.Entities;
using WebAppPortfolio.DataContracts;

namespace WebAppPortfolio.Data.Repositories
{
    public class CampsRepository : EFRepository<Camp>, ICampsRepository
    {
        public CampsRepository(PortfolioContext dbContext) : base(dbContext)
        {
        }

        public IEnumerable<Camp> GetAllCamps()
        {
            return DbContext.Camps
                .Include(c => c.Location)
                .OrderBy(c => c.EventDate)
                .ToList();
        }

        public Camp GetCamp(int id)
        {
            return DbContext.Camps
                .Include(c => c.Location)
                .FirstOrDefault(c => c.Id == id);
        }

        public Camp GetCampWithSpeakers(int id)
        {
            return DbContext.Camps
                .Include(c => c.Location)
                .Include(c => c.Speakers)
                .ThenInclude(s => s.Talks)
                .FirstOrDefault(c => c.Id == id);
        }

        public Camp GetCampByMonkier(string moniker)
        {
            return DbContext.Camps
                .Include(c => c.Location)
                .FirstOrDefault(c => c.Moniker.Equals(moniker, StringComparison.CurrentCultureIgnoreCase));
        }

        public Camp GetCampByMonikeyWithSpeakers(string moniker)
        {
            return DbContext.Camps
                .Include(c => c.Location)
                .Include(c => c.Speakers)
                .ThenInclude(s => s.Talks)
                .FirstOrDefault(c => c.Moniker.Equals(moniker, StringComparison.CurrentCultureIgnoreCase));
        }
    }
}
