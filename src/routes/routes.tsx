import { createBrowserRouter } from "react-router-dom";
import Cafe from "../pages/Cafe";
import User from "../pages/User";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Public from "./Public";
import Private from "./Private";
import UserNav from "../components/UserNav";
import UserLayout from "../layouts/UserLayout";
import Profile from "../components/Profile";
import AllAddresses from "../components/AllAddresses";
import AddressForm from "../components/AddressForm";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import Favorite from "../components/Favorite";

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
        element: (
          <MainLayout>
            <Home />
          </MainLayout>
        ),
      },

      {
        path: "/shop/:shopId",
        element: <Cafe />,
      },
      {
        path: "/favorite",
        element: (
          <MainLayout>
            <Favorite />
          </MainLayout>
        ),
      },
      {
        path: "/bookmark",
        element: (
          <MainLayout>
            <div>Hi Card there</div>
          </MainLayout>
        ),
      },
      {
        path: "/user",
        element: <User />,
        children: [
          {
            index: true,
            element: (
              <UserLayout>
                <UserNav />
              </UserLayout>
            ),
          },
          {
            path: "profile",
            element: (
              <UserLayout>
                <Profile />
              </UserLayout>
            ),
          },
          {
            path: "address",
            element: (
              <UserLayout>
                <AllAddresses />
              </UserLayout>
            ),
          },
          {
            path: "address/create",
            element: (
              <UserLayout>
                <AddressForm />
              </UserLayout>
            ),
          },
          {
            path: "orders",
            element: (
              <UserLayout>
                <Home />
              </UserLayout>
            ),
          },
        ],
      },
    ],
  },
]);
export default routes;
