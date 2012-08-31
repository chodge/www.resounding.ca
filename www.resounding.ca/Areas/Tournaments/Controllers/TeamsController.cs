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

            var isConvenor = role == "convenor";

            foreach (var team in teams) {
                var isCoach = role == "coach" && teams.IndexOf(team) == 1;
                var isPlayer = role == "player" && teams.IndexOf(team) == 1;

                // if it's a player on the team, they can see the player details
                if (isPlayer || isCoach || isConvenor) {
                    team.Permissions.R = true;
                }

                if (isCoach) {
                    //coaches can add / update players to teams
                    team.Permissions.C = true;
                    team.Permissions.U = true;
                }

                if (isConvenor) {
                    team.Permissions.C = true;
                    team.Permissions.U = true;
                    team.Permissions.D = true;
                }

                var players = team.Players.OrderBy(p => p.Position).ThenBy(p => p.Number).ToList();

                foreach (var player in players) {

                    // if it's a player on the team, they can see the player details
                    if (isPlayer || isCoach || isConvenor) {
                        player.Permissions.R = true;
                    }

                    // if it's the particular player, or coach or convenor, they can edit the player
                    if ((isPlayer && players.IndexOf(player) == 2) || isCoach || isConvenor) {
                        player.Permissions.U = true;
                    }

                    if (isCoach || isConvenor) {
                        player.Permissions.D = true;
                    }
                }
                
                team.Players = players;
            }

            return teams;
        }
    }
}