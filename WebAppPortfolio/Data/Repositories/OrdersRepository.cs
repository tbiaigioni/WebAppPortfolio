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



        public IEnumerable<Order> GetAllOrders(bool includeItems)
        {

            try
            {
                if (includeItems)
                {
                    return DbContext.Orders
                        .Include(o => o.Items)
                        .ThenInclude(i => i.Product)
                        .ToList();
                }

                return DbContext.Orders
                    .ToList();

            }
            catch (Exception ex)
            {

                //logger.LogError($"Failed Getting All Orders : {ex}");
                return null;
            }
            
        }

        public IEnumerable<Order> GetAllOrdersByUser(string username,bool includeItems)
        {
            try
            {
                if (includeItems)
                {
                    return DbContext.Orders
                        .Where(o => o.User.UserName == username)
                        .Include(o => o.Items)
                        .ThenInclude(i => i.Product)
                        .ToList();
                }

                return DbContext.Orders
                    .Where(o => o.User.UserName == username)
                    .ToList();

            }
            catch (Exception ex)
            {

                //logger.LogError($"Failed Getting All Orders : {ex}");
                return null;
            }
        }

        public Order GetOrderByOrderNumber(string orderNumber)
        {

            try
            {
                return DbContext.Orders
                    .Where(o => o.OrderNumber == orderNumber)
                    .Include(o => o.Items)
                    .ThenInclude(i => i.Product)
                    .FirstOrDefault();
            }
            catch (Exception ex)
            {

               // logger.LogError($"Failed Getting Order By Order Number : {ex}");
                return null;
            }
            
        }
        public Order GetOrderById(int id)
        {

            try
            {
                return DbContext.Orders
                    .Where(o => o.Id == id)
                    .Include(o => o.Items)
                    .ThenInclude(i => i.Product)
                    .FirstOrDefault();
            }
            catch (Exception ex)
            {

                // logger.LogError($"Failed Getting Order By Order Number : {ex}");
                return null;
            }

        }

        public IEnumerable<Order> GetOrdersByOrderDate(DateTime date)
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
