using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Filters;
using WebAppPortfolio.Data.Entities;
using WebAppPortfolio.DataContracts;

namespace WebAppPortfolio.Controllers
{
    public abstract class ApiBaseController : Controller
    {
        protected IPortfolioUow Uow { get; set; }
        protected readonly IMapper mapper;
        protected readonly UserManager<PortfolioUser> _userManager;
        public const string URLHELPER = "URLHELPER";

        protected ApiBaseController(IPortfolioUow uow, IMapper mapper, UserManager<PortfolioUser> userManager)
        {
            Uow = uow;
            this.mapper = mapper;
            _userManager = userManager;
        }

        

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            base.OnActionExecuting(context);
            context.HttpContext.Items[URLHELPER] = this.Url;
        }
    }
}