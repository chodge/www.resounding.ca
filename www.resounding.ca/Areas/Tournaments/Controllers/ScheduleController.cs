using System.Linq;
using System.Web.Mvc;
using Resounding.Tournaments.Models;

namespace Resounding.Tournaments.Controllers
{
    public class ScheduleController : Controller
    {
        public ActionResult Index(int? team = null)
        {
            using (var context = new TournamentsContext()) {
                var tournament = context.Tournaments.Include("Teams").First();
                var viewModel = new ScheduleViewModel(tournament, teamFilter: team);

                return View(viewModel);
            }
        }
    }
}
