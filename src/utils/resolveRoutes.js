const resolveRoutes = (route) => {
  // En caso de que la ruta sea Home o un id
  if(route.length <= 3){
    let validRoute = route === "/" ? route : "/:id";
    return validRoute;
  }
  return `/${route}`;
}

export default resolveRoutes;
