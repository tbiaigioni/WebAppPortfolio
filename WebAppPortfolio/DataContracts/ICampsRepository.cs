using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppPortfolio.Data.Entities;

namespace WebAppPortfolio.DataContracts
{
   public interface ICampsRepository : IRepository<Camp>
    {
        IEnumerable<Camp> GetAllCamps();
        Camp GetCamp(int id);
        Camp GetCampWithSpeakers(int id);
        Camp GetCampByMoniker(string moniker);
        Camp GetCampByMonikerWithSpeakers(string moniker);

    }
}
