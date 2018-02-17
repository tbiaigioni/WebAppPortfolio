using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAppPortfolio.DataContracts;
using WebAppPortfolio.Entities;
using WebAppPortfolio.ViewModels;

namespace WebAppPortfolio.Controllers
{
    [Route("api/[Controller]")]
    public class OrdersController : ApiBaseController
    {
        private readonly ILogger<OrdersController> _logger;

        public OrdersController(IPortfolioUow uow
                                ,IMapper mapper
                                ,ILogger<OrdersController> logger) 
                                : base(uow,mapper)
        {
            _logger = logger;

        }

        [HttpGet]
        public IActionResult Get(bool includeItems = true)
        {

            try
            {
                var results = Uow.Orders.GetAllOrders(includeItems);
                return Ok(mapper.Map<IEnumerable<Order>, IEnumerable<OrderViewModel>>(results));
            }
            catch (Exception ex)
            {

                _logger.LogError($"Failed to Get Orders: {ex}");
                return BadRequest("No Orders Found");
            }

        }


        [HttpGet("{orderNumber}")]
        public IActionResult Get(string orderNumber)
        {

            try
            {

                var order = mapper.Map<Order,OrderViewModel>((Uow.Orders.GetOrderByOrderNumber(orderNumber)));
                if (order != null)
                {
                    return Ok(order);
                }

                return NotFound();

            }
            catch (Exception ex)
            {

                _logger.LogError($"No Order Number Exists: {ex}");
                return BadRequest("No OrderNumber Exists.");
            }

            
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {

            try
            {

                var order = Uow.Orders.GetOrderById(id);
                if (order != null)
                {
                    return Ok(mapper.Map<Order,OrderViewModel>(order));
                }
                else return NotFound();

            }
            catch (Exception ex)
            {

                _logger.LogError($"No Order Number Exists: {ex}");
                return BadRequest("No OrderNumber Exists.");
            }


        }

        [HttpPost]
        public IActionResult Post([FromBody]OrderViewModel model)
        {
            try
            {

                var newOrder = mapper.Map<OrderViewModel, Order>(model);

                if (newOrder.OrderDate == DateTime.MinValue)
                {

                    newOrder.OrderDate = DateTime.Now;
                }

                if (!ModelState.IsValid) return BadRequest(ModelState);

                Uow.Orders.Add(newOrder);
                Uow.Commit();

                return Created($"/api/orders/{newOrder.Id}", mapper.Map<Order,OrderViewModel>(newOrder));

            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save new order: {ex}");
                return BadRequest("No OrderNumber Exists.");
            }

            
        }
    }
}