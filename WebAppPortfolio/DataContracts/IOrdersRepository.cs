using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WebAppPortfolio.Entities;

namespace WebAppPortfolio.DataContracts
{
    public interface IOrdersRepository :IRepository<Order>
    {

        IQueryable<Order> GetAllOrders();
        IQueryable<Order> GetOrderByOrderNumber(string orderNumber);
    }
}