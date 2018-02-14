using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAppPortfolio.DataContracts;

namespace WebAppPortfolio.Controllers
{
    [Route("api/[Controller]")]
    public class OrdersController : ApiBaseController
    {
        private readonly ILogger<OrdersController> logger;

        public OrdersController(IPortfolioUow uow, ILogger<OrdersController> logger) : base(uow)
        {
            this.logger = logger;

        }

        [HttpGet]
        public IActionResult Get()
        {

            try
            {
                return Ok(Uow.Orders.GetAllOrders());
            }
            catch (Exception ex)
            {

                logger.LogError($"Failed to Get Orders: {ex}");
                return BadRequest("No Orders Found");
            }
            
        }


        [HttpGet]
        public IActionResult Get(string orderNumber)
        {

            try
            {
                return Ok(Uow.Orders.GetOrderByOrderNumber(orderNumber));
            }
            catch (Exception ex)
            {

                logger.LogError($"No Order Number Exists: {ex}");
                return BadRequest("No OrderNumber Exists.");
            }

            
        }
    }
}