using System.Linq;
using System.Web.Mvc;
using Models;

namespace www.resounding.ca.Controllers
{
    public class CustomersController : Controller
    {
        public ActionResult Index(int page = 1)
        {
            var context = new AdventureWorksContext();
            var customers = context.Customers.Where(c => c.Revenue > 0).OrderBy(c => c.Name).Skip((page - 1) * 10).Take(10).ToList();
            ViewBag.Page = page;
            return View(customers);
        }

        public ActionResult Get(int id)
        {
            var context = new AdventureWorksContext();
            var customer = context.Customers.First(c => c.Id == id);
            return Json(customer, JsonRequestBehavior.AllowGet);
        }
    }
}
