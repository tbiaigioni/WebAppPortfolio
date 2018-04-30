using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using WebAppPortfolio.Data.Entities;
using WebAppPortfolio.DataContracts;
using WebAppPortfolio.Filters;

namespace WebAppPortfolio.Controllers.API
{
    [Produces("application/json")]
    [Route("api/camps/{moniker}/speakers/{speakerId}/talks")]
    [ValidateModel]
    public class TalksController : ApiBaseController
    {
        private IMemoryCache _cache;
        private ILogger<TalksController> _logger;

        public TalksController(IPortfolioUow uow, IMapper mapper, UserManager<PortfolioUser> userManager
            , ILogger<TalksController> logger,IMemoryCache cache) : base(uow, mapper, userManager)
        {
            _logger = logger;
            _cache = cache;
        }


        [HttpGet]
        public IActionResult Get(string moniker, int speakerId)
        {
            try
            {
                var talks = Uow.Talks.GetTalks(speakerId);

                if (talks.Any(t => t.Speaker.Camp.Moniker != moniker))
                {
                    return BadRequest("Invalid talks for the speaker selelcted.");
                }

                return Ok(Mapper.Map<IEnumerable<TalkModel>>(talks));
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get Talks: {e}");
                return BadRequest("Failed to get talks");
            }
        }


        [HttpGet("{id}", Name = "GetTalk")]
        public IActionResult Get(string moniker, int speakerId, int id)
        {
            try
            {
                if (Request.Headers.ContainsKey("If-None-Match"))
                {
                    var oldETag = Request.Headers["If-None-Match"].First();
                    if (_cache.Get($"Talk-{id}-{oldETag}") != null)
                    {
                        return StatusCode((int)HttpStatusCode.NotModified);
                    }
                }

                var talk = Uow.Talks.GetTalk(id);

                if (talk.Speaker.Id != speakerId || talk.Speaker.Camp.Moniker != moniker)
                {
                    return BadRequest("Invalid talk for the speaker selected.");
                }

                AddETag(talk);

                return Ok(Mapper.Map<TalkModel>(talk));
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to Get Talk: {e}");
                return BadRequest("Failed to get talk.");
            }
        }


        private void AddETag(Talk talk)
        {
            var etag = Convert.ToBase64String(talk.RowVersion);
            Response.Headers.Add("ETag", etag);
            _cache.Set($"Talk-{talk.Id}-{etag}", talk);
        }


        [HttpPost]
        public async Task<IActionResult> Post(string moniker, int speakerId, [FromBody] TalkModel model)
        {
            try
            {
                var speaker = Uow.Speakers.GetSpeaker(speakerId);
                if (speaker != null)
                {
                    var talk = Mapper.Map<Talk>(model);

                    talk.Speaker = speaker;
                    Uow.Talks.Add(talk);

                    if (await Uow.SaveAllAsync())
                    {
                        AddETag(talk);
                        return Created(
                            Url.Link("GetTalk", new {moniker = moniker, speakerId = speakerId, id = talk.Id}),
                            Mapper.Map<TalkModel>(talk));
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save new talk: {ex}");
            }

            return BadRequest("Failed to save new talk");
        }

        [HttpPut("{id}", Name = "UpdateTalk")]
        public async Task<IActionResult> Put(string moniker, int speakerId, int id, [FromBody] TalkModel model)
        {
            try
            {
                var talk = Uow.Talks.GetTalk(id);
                if (talk == null) return NotFound();

                if (Request.Headers.ContainsKey("If-Match"))
                {
                    var etag = Request.Headers["If-Match"].First();
                    if (etag != Convert.ToBase64String(talk.RowVersion))
                    {
                        return StatusCode((int)HttpStatusCode.PreconditionFailed);
                    }
                }

                Mapper.Map(model, talk);

                if (await Uow.SaveAllAsync())
                {
                    AddETag(talk);
                    return Ok(Mapper.Map<TalkModel>(talk));
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to update talk: {ex}");
            }

            return BadRequest("Failed to update talk");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string moniker, int speakerId, int id)
        {
            try
            {
                var talk = Uow.Talks.GetTalk(id);
                if (talk == null) return NotFound();

                if (Request.Headers.ContainsKey("If-Match"))
                {
                    var etag = Request.Headers["If-Match"].First();
                    if (etag != Convert.ToBase64String(talk.RowVersion))
                    {
                        return StatusCode((int)HttpStatusCode.PreconditionFailed);
                    }
                }

                Uow.Talks.Delete(talk);

                if (await Uow.SaveAllAsync())
                {
                    return Ok();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to delete talk: {ex}");
            }

            return BadRequest("Failed to delete talk");
        }
    }
}