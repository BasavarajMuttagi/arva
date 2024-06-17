import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Cafe from "../pages/Cafe";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Public from "./Public";
import Private from "./Private";

const routes = createBrowserRouter([
  {
    element: <Public />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    element: <Private />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/shop/:shopId",
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
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
export default routes;
