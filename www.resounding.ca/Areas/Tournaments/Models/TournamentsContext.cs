using System.Data.Entity;

namespace Resounding.Tournaments.Models
{
    public class TournamentsContext : DbContext
    {
        static TournamentsContext()
        {
            Database.SetInitializer<TournamentsContext>(new Initializer());
        }

        public DbSet<Tournament> Tournaments { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<Player> Players { get; set; }
    }
}