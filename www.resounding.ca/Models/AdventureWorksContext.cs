using System.Data.Entity;

namespace Models
{
    public class AdventureWorksContext : DbContext
    {
        static AdventureWorksContext()
        {
            Database.SetInitializer<AdventureWorksContext>(null);
        }

        public DbSet<Customer> Customers { get; set; }
    }
}