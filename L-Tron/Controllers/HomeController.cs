using Microsoft.AspNetCore.Mvc;

namespace L_Tron.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Return OnePlayer view
        /// </summary>
        /// <param name="gameType">Game type to play</param>
        /// <returns>IActionResult</returns>
        [HttpPost]
        public IActionResult OnePlayer([FromBody]DataRequest dataRequest)
        {
            return Json("");
        }

        /// <summary>
        /// Return MultiLocal view
        /// </summary>
        /// <param name="gameType">Game type to play</param>
        /// <returns>IActionResult</returns>
        [HttpPost]
        public IActionResult MultiLocal([FromBody]DataRequest dataRequest)
        {
            return Json("");
        }

        /// <summary>
        /// Return MultiOnline view
        /// </summary>
        /// <param name="gameType">Game type to play</param>
        /// <returns>IActionResult</returns>
        [HttpPost]
        public IActionResult MultiOnline([FromBody]DataRequest dataRequest)
        {
            return Json("");
        }

        /// <summary>
        /// Return Option view
        /// </summary>
        /// <param name="gameType">Game type to play</param>
        /// <returns>IActionResult</returns>
        [HttpPost]
        public IActionResult Option([FromBody]DataRequest dataRequest)
        {
            return Json("");
        }
    }

    public class DataRequest
    {
        public string Data { get; set; }
    }
}
