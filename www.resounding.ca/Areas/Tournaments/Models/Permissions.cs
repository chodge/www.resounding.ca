namespace Resounding.Tournaments.Models
{
    public class Permissions
    {
        public Permissions()
        {
            R = true;
        }

        public bool C { get; set; }
        public bool R { get; set; }
        public bool U { get; set; }
        public bool D { get; set; }
    }
}