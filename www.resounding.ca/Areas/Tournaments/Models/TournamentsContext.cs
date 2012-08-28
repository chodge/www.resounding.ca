using System.Data.Entity;

namespace Resounding.Tournaments.Models
{
    public class TournamentsContext : DbContext
    {
        static TournamentsContext()
        {
            Database.SetInitializer<TournamentsContext>(new Initializer());
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new PlayerMap());
            modelBuilder.Configurations.Add(new TeamMap());
        }

        public DbSet<Tournament> Tournaments { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<Player> Players { get; set; }
    }
}