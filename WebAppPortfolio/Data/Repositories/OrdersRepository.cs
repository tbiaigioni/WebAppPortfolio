using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppPortfolio.DataContracts;
using WebAppPortfolio.Entities;

namespace WebAppPortfolio.Data
{
    public class OrdersRepository : EFRepository<Order>,IOrdersRepository
    {

        public OrdersRepository(PortfolioContext dbContext) : base(dbContext)
        {

        }



        public IQueryable<Order> GetAllOrders()
        {

            try
            {
                return DbContext.Orders.Include(o => o.Items).ThenInclude(i => i.Product).OrderBy(o => o.OrderNumber);
            }
            catch (Exception ex)
            {

                //logger.LogError($"Failed Getting All Orders : {ex}");
                return null;
            }
            
        }

        public IQueryable<Order> GetOrderByOrderNumber(string orderNumber)
        {

            try
            {
                return DbContext.Orders.Where(o => o.OrderNumber == orderNumber);
            }
            catch (Exception ex)
            {

               // logger.LogError($"Failed Getting Order By Order Number : {ex}");
                return null;
            }
            
        }

        public IQueryable<Order> GetOrderByOrderDate(DateTime date)
        {

            try
            {
                return DbContext.Orders.Where(o => o.OrderDate == date);
            }
            catch (Exception ex)
            {

                return null;
            }
           
        }
    }
}
