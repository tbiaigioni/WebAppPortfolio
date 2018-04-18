using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebAppPortfolio.Data;
using WebAppPortfolio.DataContracts;
using WebAppPortfolio.Services;
using WebAppPortfolio.ViewModels;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAppPortfolio.Controllers
{
    public class AppController : ApiBaseController
    {
        private readonly IMailService _mailService;

        public AppController(IMailService mailService, IPortfolioUow uow,IMapper mapper) : base(uow,mapper)
        {
            _mailService = mailService;
        }
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("contact")]
        public IActionResult Contact()
        {
            ViewBag.Title = "Contact Me";

            return View();
        }

        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model)
        {

            if (ModelState.IsValid)
            {
                _mailService.SendMessage(model.FirstName, model.Subject, model.Msg);
                ViewBag.UserMessage = "Mail Sent";
                ModelState.Clear();
            }
            else
            {

            }
            return View();
        }

        public IActionResult About()
        {
            ViewBag.Title = "About Me";

            return View();
        }
        [Authorize]
        public IActionResult Shop()
        {
            return View();
        }
    }
}
