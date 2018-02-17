using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppPortfolio.DataContracts;

namespace WebAppPortfolio.Controllers
{
    public class ApiBaseController : Controller
    {

        protected IPortfolioUow Uow { get; set; }
        protected IMapper mapper;

        public ApiBaseController(IPortfolioUow uow,IMapper mapper)
        {
            Uow = uow;
            this.mapper = mapper;
        }

    }
}
