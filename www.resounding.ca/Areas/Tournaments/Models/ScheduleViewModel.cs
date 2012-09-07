using System.Collections.Generic;
using System.Linq;

namespace Resounding.Tournaments.Models
{
    public class ScheduleViewModel
    {
        private Tournament _tournament;
        private int? _teamFilter;

        public ScheduleViewModel(Tournament tournament, int? teamFilter = null, string view = "List")
        {
            _tournament = tournament;
            View = view;
            _teamFilter = teamFilter;
        }

        public string TournamentName
        {
            get
            {
                return _tournament.Name;
            }
        }

        public ICollection<Team> Teams
        {
            get
            {
                return _tournament.Teams.ToList();
            }
        }
    
        public string TeamFilter 
        {
            get
            {
                if (!_teamFilter.HasValue) return "All Teams";
                return _tournament.Teams.First(t => t.Id == _teamFilter.Value).Name;
            }
        }

        public string View { get; set; }
    }
}
