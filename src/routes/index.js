import Header from "../templates/Headers";
import Home from "../pages/Home";
import Characters from "../pages/Characters";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";
// Rutas
const routes = {
  "/": Home,
  "/:id": Characters,
}

// Funcion que controla El DOM y eventos
const router = async () => {
  const header = null || document.querySelector("#header");
  const content = null || document.querySelector("#content");

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
}

export default router;
