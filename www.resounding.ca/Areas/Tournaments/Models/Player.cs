namespace Resounding.Tournaments.Models
{
    public class Player
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int TeamId { get; set; }

        private Permissions _permissions = new Permissions();
        public Permissions Permissions { get { return _permissions; } }
    }
}