import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Cafe from "../pages/Cafe";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Cafe />,
  },
  {
    path: "/favorite",
    element: <Home />,
  },
  {
    path: "/bookmark",
    element: <Home />,
  },
  {
    path: "/user",
    element: <Home />,
  },
]);
export default routes;
