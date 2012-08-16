using System.Collections.Generic;
using System.Linq;

namespace Resounding.Tournaments.Models
{
    public class TeamsViewModel
    {
        public TeamsViewModel(Tournament tournament)
        {
            TournamentName = tournament.Name;
            Teams = tournament.Teams.OrderBy(t => t.Name).ToList();
        }

        public string TournamentName { get; set; }
        public IEnumerable<Team> Teams { get; set; }
    }
}
