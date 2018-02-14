using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppPortfolio.DataContracts;
using WebAppPortfolio.Entities;

namespace WebAppPortfolio.Controllers.API
{
    [Route("api/[Controller]")]
    public class ProductsController : ApiBaseController
    {
        private readonly ILogger<ProductsController> logger;

        public ProductsController(IPortfolioUow uow,ILogger<ProductsController> logger) : base(uow)
        {

            this.logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {

            try
            {
                return Ok(Uow.Products.GetAllProducts());
            }
            catch (Exception ex)
            {

                logger.LogError($"Failed to Get products: {ex}");
                return BadRequest("Failed to get products");

            }
            
        }
    }
}
