using System.Linq;
using System.Web.Mvc;
using Resounding.Tournaments.Models;

namespace Resounding.Tournaments.Controllers
{
    public class TournamentsController : Controller
    {
        public ActionResult Teams()
        {
            var context = new TournamentsContext();
            var tournament = context.Tournaments.Include("Teams").First();
            var viewModel = new TeamsViewModel(tournament);

            return View(viewModel);
        }
    }
}