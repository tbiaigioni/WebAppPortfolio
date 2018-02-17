using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppPortfolio.Entities;
using WebAppPortfolio.ViewModels;

namespace WebAppPortfolio.Data
{
    public class WebAppProfolioMappingProfile : Profile
    {
        public WebAppProfolioMappingProfile()
        {
            CreateMap<Order, OrderViewModel>()
                .ForMember( o => o.OrderId,ex => ex.MapFrom( o => o.Id))
                .ReverseMap();
            CreateMap<OrderItem, OrderItemViewModel>()
                .ReverseMap();
        }
    }
}
