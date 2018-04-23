using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAppPortfolio.DataContracts;

namespace WebAppPortfolio.Controllers.API
{
    [Produces("application/json")]
    [Route("api/[Controller]")]
    public class CampsController : ApiBaseController
    {
        private readonly ILogger<CampsController> _logger;

        public CampsController(IPortfolioUow uow, IMapper mapper) : base(uow, mapper)
        {
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var results = Uow.Camps.GetAllCamps();

                return Ok(results);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to Get Camps: {ex}");
                return BadRequest("No Camps Found");
            }


        }
    }
}