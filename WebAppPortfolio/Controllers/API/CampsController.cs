using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAppPortfolio.Data.Entities;
using WebAppPortfolio.DataContracts;
using WebAppPortfolio.Filters;

namespace WebAppPortfolio.Controllers.API
{
    [Authorize]
    [EnableCors("AnyGET")]
    [Produces("application/json")]
    [Route("api/[Controller]")]
    [ValidateModel]
    public class CampsController : ApiBaseController
    {
        private readonly ILogger<CampsController> _logger;

        public CampsController(IPortfolioUow uow, IMapper mapper, ILogger<CampsController> logger,
            UserManager<PortfolioUser> userManager) : base(uow,
            mapper, userManager)
        {
            _logger = logger;
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

        [HttpGet("{moniker}", Name = "CampGet")]
        public IActionResult Get(string moniker, bool includeSpeakers)
        {
            try
            {
                Camp camp = includeSpeakers
                    ? Uow.Camps.GetCampByMonikerWithSpeakers(moniker)
                    : Uow.Camps.GetCampByMoniker(moniker);

                if (camp == null)
                {
                    return NotFound($"Camp {moniker} was not found");
                }

                return Ok(mapper.Map<CampModel>(camp));
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to Get Camp by Moniker : {e}");
                return BadRequest("No Camp Wtih Specified Moniker Found");
            }
        }

        [EnableCors("Biagioni")]
        [Authorize(Policy = "SuperUsers")]
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CampModel model)
        {
            try
            {
                _logger.LogInformation("Creating new Code Camp");

                var camp = mapper.Map<Camp>(model);

                Uow.Camps.Add(camp);
                if (await Uow.SaveAllAsync())
                {
                    var newUri = Url.Link("CampGet", new {moniker = camp.Moniker});
                    return Created(newUri, mapper.Map<CampModel>(camp));
                }

                _logger.LogError("Could not save camp to database.");
                return BadRequest("Failed to save camp.");
            }
            catch (Exception e)
            {
                _logger.LogError($"Threw exception while saving camps: {e}");
                return BadRequest("Failed to created camp.");
            }
        }

        [HttpPut("{moniker}")]
        public async Task<IActionResult> Put(string moniker, [FromBody] CampModel model)
        {
            try
            {
                var oldCamp = Uow.Camps.GetCampByMoniker(moniker);
                if (oldCamp == null)
                {
                    return NotFound($"Could not find a camp with the moniker of {moniker}");
                }

                mapper.Map(model, oldCamp);
                if (await Uow.SaveAllAsync())
                {
                    return Ok(mapper.Map<CampModel>(oldCamp));
                }
            }
            catch (Exception e)
            {
                _logger.LogError($"Exception thrown while updating camp: {e}");
                return BadRequest("Failed to update camp.");
            }

            return BadRequest("Failed to update camp.");
        }

        [HttpDelete("{moniker}")]
        public async Task<IActionResult> Delete(string moniker)
        {
            try
            {
                var oldCamp = Uow.Camps.GetCampByMoniker(moniker);
                if (oldCamp == null)
                {
                    return NotFound($"Could not find a camp with the moniker of {moniker}");
                }

                Uow.Camps.Delete(oldCamp);

                if (await Uow.SaveAllAsync())
                {
                    return Ok();
                }
            }
            catch (Exception e)
            {
                _logger.LogError($"Exception thrown while deleting camp: {e}");
                return BadRequest("Failed to delete camp.");
            }

            return BadRequest("Failed to delete camp.");
        }
    }
}