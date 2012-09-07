using System.Web.Http;
using System.Web.Mvc;

namespace Resounding.Tournaments
{
    public class TournamentsAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "Tournaments";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.Routes.MapHttpRoute(
                name: "TournamentsApi",
                routeTemplate: "Tournaments/api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            context.MapRoute(
                "Tournaments",
                "Tournaments/{controller}/{action}",
                new { controller = "Tournaments", action = "Index"}
            );
        }
    }
}
