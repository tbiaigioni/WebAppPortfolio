using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppPortfolio.DataContracts;

namespace WebAppPortfolio.Controllers.API
{
    public class ProductController : ApiBaseController
    {
        public ProductController(IPortfolioUow uow) : base(uow)
        {
        }
    }
}
