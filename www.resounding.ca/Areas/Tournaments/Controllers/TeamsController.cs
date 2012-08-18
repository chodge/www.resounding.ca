using System.Linq;
using System.Web.Http;
using Resounding.Tournaments.Models;
using System.Collections.Generic;

namespace Resounding.Tournaments.Api
{
    public class TeamsController : ApiController
    {
        public ICollection<Team> Get()
        {
            var context = new TournamentsContext();
            var teams = context.Teams.Include("Players").OrderBy(t => t.Name).ToList();
            return teams;
        }
    }
}