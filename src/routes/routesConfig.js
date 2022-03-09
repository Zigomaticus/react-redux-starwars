// Containers
import HomePage from "../containers/HomePage/HomePage";
import NotFoundPage from "../containers/NotFoundPage/NotFoundPage";
import PeoplePage from "../containers/PeoplePage/PeoplePage";
import PersonPage from "../containers/PersonPage/PersonPage";
import FavoritePage from "../containers/FavoritePage/FavoritePage";

const routesConfig = [
  { path: "/", element: <HomePage /> },
  { path: "/people", element: <PeoplePage /> },
  { path: "/people/:id", element: <PersonPage /> },
  { path: "/favorites", element: <FavoritePage /> },
  { path: "*", element: <NotFoundPage /> },
];

export default routesConfig;
