using System.Collections.Generic;
namespace Resounding.Tournaments.Models
{
    public class Team
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Player> Players { get; set; }

        private Permissions _permissions = new Permissions();
        public Permissions Permissions { get { return _permissions; } }
    }
}