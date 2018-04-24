using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAppPortfolio.Data.Entities;
using WebAppPortfolio.DataContracts;
using WebAppPortfolio.Filters;

namespace WebAppPortfolio.Controllers.API
{
    [Produces("application/json")]
    [Route("api/camps/{moniker}/speakers")]
    [ValidateModel]
    [ApiVersion("1.0")]
    [ApiVersion("1.1")]
    public class SpeakersController : ApiBaseController
    {
        private readonly ILogger<SpeakersController> _logger;


        public SpeakersController(IPortfolioUow uow, IMapper mapper, UserManager<PortfolioUser> userManager,
            ILogger<SpeakersController> logger) : base(uow, mapper, userManager)
        {
            _logger = logger;
        }

        [HttpGet]
        [MapToApiVersion("1.0")]
        public IActionResult Get(string moniker, bool includeTalks = false)
        {
            try
            {
                var speakers = includeTalks
                    ? Uow.Speakers.GetSpeakersByMonikerWithTalks(moniker)
                    : Uow.Speakers.GetSpeakersByMoniker(moniker);
                return Ok(mapper.Map<IEnumerable<SpeakerModel>>(speakers));
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get Speakers: {e}");
                return BadRequest("Failed to Get Speakers");
            }
        }

        [HttpGet]
        [MapToApiVersion("1.1")]
        public virtual IActionResult GetWithCount(string moniker, bool includeTalks = false)
        {
            try
            {
                var speakers = includeTalks
                    ? Uow.Speakers.GetSpeakersByMonikerWithTalks(moniker)
                    : Uow.Speakers.GetSpeakersByMoniker(moniker);
                return Ok(new {count = speakers.Count(), results = mapper.Map<IEnumerable<SpeakerModel>>(speakers)});
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get Speakers: {e}");
                return BadRequest("Failed to Get Speakers");
            }
        }

        [HttpGet("{id}", Name = "SpeakerGet")]
        public IActionResult Get(string moniker, int id, bool includeTalks = false)
        {
            try
            {
                var speaker = includeTalks ? Uow.Speakers.GetSpeakerWithTalks(id) : Uow.Speakers.GetSpeaker(id);
                if (speaker == null) return NotFound();
                if (speaker.Camp.Moniker != moniker) return BadRequest("Speaker not in specified Camp");

                return Ok(mapper.Map<SpeakerModel>(speaker));
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get Speaker: {e}");
                return BadRequest("Failed to Get Speaker");
            }
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Post(string moniker, [FromBody] SpeakerModel model)
        {
            try
            {
                var camp = Uow.Camps.GetCampByMoniker(moniker);
                if (camp == null) return BadRequest("Could not find camp");

                var speaker = mapper.Map<Speaker>(model);
                speaker.Camp = camp;

                var campUser = await _userManager.FindByNameAsync(User.Identity.Name);
                if (campUser != null)
                {
                    speaker.User = campUser;

                    Uow.Speakers.Add(speaker);

                    if (await Uow.SaveAllAsync())
                    {
                        var url = Url.Link("SpeakerGet", new {moniker = camp.Moniker, id = speaker.Id});
                        return Created(url, mapper.Map<SpeakerModel>(speaker));
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Exception thrown while adding speaker: {ex}");
                return BadRequest("Could not add new speaker");
            }

            return BadRequest("Could not add new speaker");
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> Put(string moniker,
            int id,
            [FromBody] SpeakerModel model)
        {
            try
            {
                var speaker = Uow.Speakers.GetSpeaker(id);
                if (speaker == null) return NotFound();
                if (speaker.Camp.Moniker != moniker) return BadRequest("Speaker and Camp do not match");

                if (speaker.User.UserName != this.User.Identity.Name) return Forbid();

                mapper.Map(model, speaker);

                if (await Uow.SaveAllAsync())
                {
                    return Ok(mapper.Map<SpeakerModel>(speaker));
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Exception thrown while updating speaker: {ex}");

                return BadRequest("Could not update speaker");
            }

            return BadRequest("Could not update speaker");
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> Delete(string moniker, int id)
        {
            try
            {
                var speaker = Uow.Speakers.GetSpeaker(id);
                if (speaker == null) return NotFound();
                if (speaker.Camp.Moniker != moniker) return BadRequest("Speaker and Camp do not match");

                if (speaker.User.UserName != this.User.Identity.Name) return Forbid();

                Uow.Speakers.Delete(speaker);

                if (await Uow.SaveAllAsync())
                {
                    return Ok();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Exception thrown while deleting speaker: {ex}");
                return BadRequest("Could not delete speaker");
            }

            return BadRequest("Could not delete speaker");
        }
    }
}