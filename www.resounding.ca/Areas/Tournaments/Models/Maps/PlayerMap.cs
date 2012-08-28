using System.Data.Entity.ModelConfiguration;

namespace Resounding.Tournaments.Models
{
    public class PlayerMap : EntityTypeConfiguration<Player>
    {
        public PlayerMap()
        {
            Ignore(p => p.Permissions);
        }
    }
}