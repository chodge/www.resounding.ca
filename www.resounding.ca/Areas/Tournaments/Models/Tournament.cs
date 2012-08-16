using System.Collections.Generic;

namespace Resounding.Tournaments.Models
{
    public class Tournament
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Team> Teams { get; set; }
    }
}