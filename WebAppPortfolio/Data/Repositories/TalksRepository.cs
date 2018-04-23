using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAppPortfolio.Data.Entities;
using WebAppPortfolio.DataContracts;

namespace WebAppPortfolio.Data.Repositories
{
    public class TalksRepository:EFRepository<Talk> , ITalksRepository
    {
        public TalksRepository(PortfolioContext dbContext) : base(dbContext)
        {
        }

        public Talk GetTalk(int talkId)
        {
            return DbContext.Talks
                .Include(t => t.Speaker)
                .ThenInclude(s => s.Camp)
                .Where(t => t.Id == talkId)
                .OrderBy(t => t.Title)
                .FirstOrDefault();
        }

        public IEnumerable<Talk> GetTalksForSpeaker(int speakerId)
        {
            return DbContext.Talks
                .Include(t => t.Speaker)
                .ThenInclude(s => s.Camp)
                .Where(t => t.Speaker.Id == speakerId)
                .OrderBy(t => t.Title)
                .ToList();
        }
    }
}
