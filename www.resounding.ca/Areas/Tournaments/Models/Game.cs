using System;
namespace Resounding.Tournaments.Models
{
    public class Game
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }

        public Team Home { get; set; }
        public Team Away { get; set; }
    }
}