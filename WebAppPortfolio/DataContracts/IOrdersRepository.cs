using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WebAppPortfolio.Entities;

namespace WebAppPortfolio.DataContracts
{
    public interface IOrdersRepository :IRepository<Order>
    {

        IEnumerable<Order> GetAllOrders();
        Order GetOrderByOrderNumber(string orderNumber);
        Order GetOrderById(int id);
        IEnumerable<Order> GetOrdersByOrderDate(DateTime date);
    }
}