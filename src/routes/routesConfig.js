// Containers
import HomePage from "../containers/HomePage/HomePage";
import PeoplePage from "../containers/PeoplePage/PeoplePage";

const routesConfig = [
  { path: "/", element: <HomePage /> },
  { path: "/people", element: <PeoplePage /> },
  { path: "*", element: <div>123</div> },
];

export default routesConfig;
