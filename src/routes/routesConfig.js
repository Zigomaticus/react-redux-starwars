// Containers
import HomePage from "../containers/HomePage/HomePage";
import NotFoundPage from "../containers/NotFoundPage/NotFoundPage";
import PeoplePage from "../containers/PeoplePage/PeoplePage";

const routesConfig = [
  { path: "/", element: <HomePage /> },
  { path: "/people", element: <PeoplePage /> },
  { path: "*", element: <NotFoundPage /> },
];

export default routesConfig;
