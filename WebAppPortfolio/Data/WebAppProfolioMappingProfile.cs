using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppPortfolio.Data.Entities;
using WebAppPortfolio.Entities;
using WebAppPortfolio.ViewModels;

namespace WebAppPortfolio.Data
{
    public class WebAppProfolioMappingProfile : Profile
    {
        public WebAppProfolioMappingProfile()
        {
            CreateMap<Order, OrderViewModel>()
                .ForMember(o => o.OrderId, ex => ex.MapFrom(o => o.Id))
                .ReverseMap();
            CreateMap<OrderItem, OrderItemViewModel>()
                .ReverseMap();
            CreateMap<Camp, CampModel>()
                .ForMember(c => c.StartDate,
                    opt => opt.MapFrom(camp => camp.EventDate))
                .ForMember(c => c.EndDate,
                    opt => opt.ResolveUsing(camp => camp.EventDate.AddDays(camp.Length > 0 ? camp.Length - 1 : 0)))
                .ForMember(c => c.Url,
                    opt => opt.ResolveUsing<CampUrlResolver>())
                .ReverseMap()
                .ForMember(m => m.EventDate,
                    opt => opt.MapFrom(model => model.StartDate))
                .ForMember(m => m.Length,
                    opt => opt.ResolveUsing(model => (model.EndDate - model.StartDate).Days + 1))
                .ForMember(m => m.Location,
                    opt => opt.ResolveUsing(c => new Location()
                    {
                        Address1 = c.LocationAddress1,
                        Address2 = c.LocationAddress2,
                        Address3 = c.LocationAddress3,
                        CityTown = c.LocationCityTown,
                        StateProvince = c.LocationStateProvince,
                        PostalCode = c.LocationPostalCode,
                        Country = c.LocationCountry
                    }));

            CreateMap<Speaker, SpeakerModel>()
                .ForMember(s => s.Url, opt => opt.ResolveUsing<SpeakerUrlResolver>())
                .ReverseMap();

            //CreateMap<Speaker, Speaker2Model>()
            //    .IncludeBase<Speaker, SpeakerModel>()
            //    .ForMember(s => s.BadgeName, opt => opt.ResolveUsing(s => $"{s.Name} (@{s.TwitterName})"));

            CreateMap<Talk, TalkModel>()
                .ForMember(s => s.Url, opt => opt.ResolveUsing<TalkUrlResolver>())
                .ForMember(s => s.Links, opt => opt.ResolveUsing<TalkLinksResolver>())
                .ReverseMap();
        }
    }
}