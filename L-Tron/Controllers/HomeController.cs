using Microsoft.AspNetCore.Mvc;

namespace L_Tron.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
