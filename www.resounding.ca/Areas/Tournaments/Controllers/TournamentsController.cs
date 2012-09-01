using System.Linq;
using System.Web.Mvc;
using Resounding.Tournaments.Models;

namespace Resounding.Tournaments.Controllers
{
    public class TournamentsController : Controller
    {
        public ActionResult Teams()
        {
            using(var context = new TournamentsContext()) {
                var tournament = context.Tournaments.Include("Teams").Include("Teams.Coach").First();
                var viewModel = new TeamsViewModel(tournament);

                return View(viewModel);
            }
        }

        [HttpPost]
        public ActionResult Reset()
        {
            using (var context = new TournamentsContext()) {
                context.Database.Initialize(true);
            }
            return new EmptyResult();
        }
    }
}