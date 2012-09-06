using System;
using System.Linq;
using System.Web.Http;
using Resounding.Tournaments.Models;
using System.Collections.Generic;

namespace Resounding.Tournaments.Api
{
    public class GamesController : ApiController
    {
        public ICollection<Game> Get(DateTime? start = null, DateTime? end = null)
        {
            var context = new TournamentsContext();
            IEnumerable<Game> games = context.Games.Include("Home").Include("Away");
            if (start.HasValue) {
                games = games.Where(g => g.Date > start.Value.Date);
            }

            if (end.HasValue) {
                var endOfDay = end.Value.Date.AddDays(1).AddSeconds(-1);
                games = games.Where(g => g.Date < endOfDay);
            }

            games = games.OrderBy(g => g.Date).ThenBy(g => g.Home.Name);

            var list = games.ToList();
            return list;
        }
    }
}