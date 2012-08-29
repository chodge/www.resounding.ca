using System.Linq;
using System.Web.Http;
using Resounding.Tournaments.Models;
using System.Collections.Generic;

namespace Resounding.Tournaments.Api
{
    public class TeamsController : ApiController
    {
        public ICollection<Team> Get(string role = "public")
        {
            var context = new TournamentsContext();
            var teams = context.Teams.Include("Players").Include("Coach").OrderBy(t => t.Name).ToList();

            foreach (var team in teams) {
                // everyone can read a team
                team.Permissions.R = true;

                if (role == "coach" && teams.IndexOf(team) == 0) {
                    //coaches can add / update players to teams
                    team.Permissions.C = true;
                    team.Permissions.U = true;
                }

                if (role == "convenor") {
                    team.Permissions.C = true;
                    team.Permissions.U = true;
                    team.Permissions.D = true;
                }

                var players = team.Players.OrderBy(p => p.Position).ThenBy(p => p.Number).ToList();

                foreach (var player in players) {

                    if (role != "public") {
                        player.Permissions.R = true;
                    }

                    if ((role == "player" && teams.IndexOf(team) == 0 && players.IndexOf(player) == 0) ||
                        (role == "coach" && teams.IndexOf(team) == 0) ||
                        role == "convenor") {
                        player.Permissions.U = true;
                    }
                }
                
                team.Players = players;
            }

            return teams;
        }
    }
}