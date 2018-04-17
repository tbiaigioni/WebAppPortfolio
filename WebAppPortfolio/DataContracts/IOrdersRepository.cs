using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WebAppPortfolio.Entities;

namespace WebAppPortfolio.DataContracts
{
    public interface IOrdersRepository :IRepository<Order>
    {

        IEnumerable<Order> GetAllOrders(bool includeItems);
        IEnumerable<Order> GetAllOrdersByUser(string username,bool includeItems);
        Order GetOrderByOrderNumber(string username,string orderNumber);
        Order GetOrderById(string username, int id);
        IEnumerable<Order> GetOrdersByOrderDate(DateTime date);
        
    }
}