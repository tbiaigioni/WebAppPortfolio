using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAppPortfolio.Data.Entities;
using WebAppPortfolio.DataContracts;

namespace WebAppPortfolio.Data.Repositories
{
    public class SpeakersRepository:EFRepository<Speaker>, ISpeakersRepository
    {
        public SpeakersRepository(PortfolioContext dbContext) : base(dbContext)
        {
        }

        public Speaker GetSpeaker(int speakerId)
        {
            return DbContext.Speakers
                .Include(s => s.Camp)
                .FirstOrDefault(s => s.Id == speakerId);
        }

        public IEnumerable<Speaker> GetSpeakersForCamp(int id)
        {
            return DbContext.Speakers
                .Include(s => s.Camp)
                .Where(s => s.Camp.Id == id)
                .OrderBy(s => s.Name)
                .ToList();
        }

        public IEnumerable<Speaker> GetSpeakersWithTalks(int id)
        {
            return DbContext.Speakers
                .Include(s => s.Camp)
                .Include(s => s.Talks)
                .Where(s => s.Camp.Id == id)
                .OrderBy(s => s.Name)
                .ToList();
        }

        public IEnumerable<Speaker> GetSpeakersByMoniker(string moniker)
        {
            return DbContext.Speakers
                .Include(s => s.Camp)
                .Where(s => s.Camp.Moniker.Equals(moniker, StringComparison.CurrentCultureIgnoreCase))
                .OrderBy(s => s.Name)
                .ToList();
        }

        public IEnumerable<Speaker> GetSpeakersByMonikerWithTalks(string moniker)
        {
            return DbContext.Speakers
                .Include(s => s.Camp)
                .Include(s => s.Talks)
                .Where(s => s.Camp.Moniker.Equals(moniker, StringComparison.CurrentCultureIgnoreCase))
                .OrderBy(s => s.Name)
                .ToList();
        }

        public Speaker GetSpeakerWithTalks(int speakerId)
        {
            return DbContext.Speakers
                .Include(s => s.Camp)
                .Include(s => s.Talks)
                .FirstOrDefault(s => s.Id == speakerId);
        }
    }
}
