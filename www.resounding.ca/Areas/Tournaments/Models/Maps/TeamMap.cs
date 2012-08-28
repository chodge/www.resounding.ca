using System.Data.Entity.ModelConfiguration;

namespace Resounding.Tournaments.Models
{
    public class TeamMap : EntityTypeConfiguration<Team>
    {
        public TeamMap()
        {
            Ignore(p => p.Permissions);
        }
    }
}