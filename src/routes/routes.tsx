import { createBrowserRouter } from "react-router-dom";
import Cafe from "../pages/Cafe";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Public from "./Public";
import Private from "./Private";
import MainLayout from "../layouts/MainLayout";
import PaymentSuccess from "../pages/PaymentSuccess";
import Home from "../pages/Home";
import UserProfileMenu from "../pages/UserProfileMenu";
import UserProfile from "../pages/UserProfile";
import Payment from "../pages/Payment";
import Favorite from "../pages/Favorite";
import Cart from "../pages/Cart";
import User from "./User";
import UserAddress from "../pages/UserAddress";
import UserCreateAddress from "../pages/UserCreateAddress";
import UserOrders from "../pages/UserOrders";

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
        path: "/return",
        element: <PaymentSuccess />,
      },
      {
        path: "payment",
        element: <Payment />,
      },

      {
        path: "/shop/:shopId",
        element: <Cafe />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/user",
        element: (
          <MainLayout>
            <User />
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: <UserProfileMenu />,
          },
          {
            path: "profile",
            element: <UserProfile />,
          },
          {
            path: "address",
            element: <UserAddress />,
          },
          {
            path: "address/create",
            element: <UserCreateAddress />,
          },
          {
            path: "orders",
            element: <UserOrders />,
          },
        ],
      },
    ],
  },
]);
export default routes;
