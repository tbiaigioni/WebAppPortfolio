using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppPortfolio.Data.Entities;

namespace WebAppPortfolio.DataContracts
{
    public interface ISpeakersRepository : IRepository<Speaker>
    {

        Speaker GetSpeaker(int speakerId);
        IEnumerable<Speaker> GetSpeakersForCamp(int id);
        IEnumerable<Speaker> GetSpeakersWithTalks(int id);
        IEnumerable<Speaker> GetSpeakersByMoniker(string moniker);
        IEnumerable<Speaker> GetSpeakersByMonikerWithTalks(string moniker);
        Speaker GetSpeakerWithTalks(int speakerId);


    }
}
