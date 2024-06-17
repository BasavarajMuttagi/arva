import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Cafe from "../pages/Cafe";
import Profile from "../pages/Profile";
import { Suspense } from "react";
import Loading from "../components/Loading";

const routes = createBrowserRouter([
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
    element: (
      <Suspense fallback={<Loading />}>
        <Profile />
      </Suspense>
    ),
  },
]);
export default routes;
