using System.Data.Entity;

namespace Models
{
    public class AdventureWorksContext : DbContext
    {
        public DbSet<Customer> Customers { get; set; }
    }
}