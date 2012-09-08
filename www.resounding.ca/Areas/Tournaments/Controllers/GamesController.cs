using System;
using System.Linq;
using System.Web.Http;
using Resounding.Tournaments.Models;
using System.Collections.Generic;

namespace Resounding.Tournaments.Api
{
    public class GamesController : ApiController
    {
        public ICollection<Game> Get()
        {
            var context = new TournamentsContext();
            var games = context.Games
                .Include("Home")
                .Include("Visitor")
                .OrderBy(g => g.Date)
                .ThenBy(g => g.Home.Name)
                .ToList();

            return games;
        }
    }
}