using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppPortfolio.Data.Entities;

namespace WebAppPortfolio.DataContracts
{
    public interface ITalksRepository : IRepository<Talk>
    {
        Talk GetTalk(int talkId);
        IEnumerable<Talk> GetTalks(int speakerId);

    }
}
