using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAppPortfolio.Data.Entities;
using WebAppPortfolio.DataContracts;
using WebAppPortfolio.Entities;
using WebAppPortfolio.ViewModels;

namespace WebAppPortfolio.Controllers
{
    [Route("api/[Controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class OrdersController : ApiBaseController
    {
        private readonly ILogger<OrdersController> _logger;

        public OrdersController(IPortfolioUow uow
            , IMapper mapper
            , ILogger<OrdersController> logger
            , UserManager<PortfolioUser> userManager)
            : base(uow, mapper, userManager)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get(bool includeItems = true)
        {
            try
            {
                var username = User.Identity.Name;

                var results = Uow.Orders.GetAllOrdersByUser(username, includeItems);
                return Ok(Mapper.Map<IEnumerable<Order>, IEnumerable<OrderViewModel>>(results));
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
                var order = Mapper.Map<Order, OrderViewModel>(
                    (Uow.Orders.GetOrderByOrderNumber(User.Identity.Name, orderNumber)));
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
                var order = Uow.Orders.GetOrderById(User.Identity.Name, id);
                if (order != null)
                {
                    return Ok(Mapper.Map<Order, OrderViewModel>(order));
                }

                return NotFound();
            }
            catch (Exception ex)
            {
                _logger.LogError($"No Order Number Exists: {ex}");
                return BadRequest("No OrderNumber Exists.");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] OrderViewModel model)
        {
            try
            {
                var newOrder = Mapper.Map<OrderViewModel, Order>(model);

                if (newOrder.OrderDate == DateTime.MinValue)
                {
                    newOrder.OrderDate = DateTime.Now;
                }

                if (!ModelState.IsValid) return BadRequest(ModelState);

                var currentUser = await UserManager.FindByNameAsync(User.Identity.Name);
                newOrder.User = currentUser;

                Uow.Orders.Add(newOrder);
                Uow.Commit();

                return Created($"/api/orders/{newOrder.Id}", Mapper.Map<Order, OrderViewModel>(newOrder));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save new order: {ex}");
                return BadRequest("No OrderNumber Exists.");
            }
        }
    }
}