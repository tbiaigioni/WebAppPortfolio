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

namespace WebAppPortfolio.Controllers.API
{
    [Route("/api/orders/{order.id}/items")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class OrderItemsController : ApiBaseController
    {
        private readonly ILogger<OrderItemsController> _logger;

        public OrderItemsController(IPortfolioUow uow
            , IMapper mapper
            , ILogger<OrderItemsController> logger
            , UserManager<PortfolioUser> userManager)
            : base(uow, mapper, userManager)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get(int orderId)
        {
            try
            {
                var order = Uow.Orders.GetOrderById(User.Identity.Name, orderId);
                if (order != null)
                    return Ok(mapper.Map<IEnumerable<OrderItem>, IEnumerable<OrderItemViewModel>>(order.Items));

                return NotFound();
            }
            catch (Exception e)
            {
                _logger.LogError($"Unable to get OrderItems : {e}");
                return BadRequest("Unable to get OrderItems");
            }
        }

        [HttpGet("{id}")]
        public IActionResult Get(int orderId, int id)
        {
            try
            {
                var order = Uow.Orders.GetOrderById(User.Identity.Name, id);
                var item = order?.Items.FirstOrDefault(i => i.Id == id);
                if (item != null)
                {
                    return Ok(mapper.Map<OrderItem, OrderItemViewModel>(item));
                }


                return NotFound();
            }
            catch (Exception e)
            {
                _logger.LogError($"Unable to get OrderItems : {e}");
                return BadRequest("Unable to get OrderItems");
            }
        }
    }
}