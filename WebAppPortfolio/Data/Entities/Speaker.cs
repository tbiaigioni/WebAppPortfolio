using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppPortfolio.Data.Entities
{
    public class Speaker
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string CompanyName { get; set; }
        public string PhoneNumber { get; set; }
        public string WebsiteUrl { get; set; }
        public string TwitterName { get; set; }
        public string Bio { get; set; }
        public PortfolioUser User { get; set; }
        public string GitHubName { get; set; }
        public string HeadShotUrl { get; set; }

        public ICollection<Talk> Talks { get; set; }
        public Camp Camp { get; set; }

        public byte[] RowVersion { get; set; }

    }
}
