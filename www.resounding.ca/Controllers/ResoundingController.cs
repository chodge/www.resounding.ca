using System.Web.Mvc;

namespace www.resounding.ca.Controllers
{
    public class ResoundingController : Controller
    {
        public ActionResult Index()
        {
            if (Request.Url.Host == "apps.resounding.ca") {
                return RedirectToAction("index", "apps");
            }

            return View();
        }
    }
}
