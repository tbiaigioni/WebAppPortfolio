using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAppPortfolio.Data;
using WebAppPortfolio.Services;
using WebAppPortfolio.ViewModels;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAppPortfolio.Controllers
{
    public class AppController : Controller
    {
        private readonly IMailService mailService;
        private readonly PortfolioContext context;

        public AppController(IMailService mailService,PortfolioContext context)
        {
            this.mailService = mailService;
            this.context = context;
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
                mailService.SendMessage(model.FirstName, model.Subject, model.Msg);
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

        public IActionResult Shop()
        {

            var result = context.Products
                .OrderBy(p => p.Category)
                .ToList();
            return View(result.ToList());
        }
    }
}
