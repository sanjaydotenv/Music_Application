import { createBrowserRouter } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MainLayout from "../layout/MainLayout";
import Discover from "../pages/Discover";
import Favorites from "../pages/Favorites";
import Search from "../pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/main",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Discover />,
      },
      {
        path: "favorite",
        element: <Favorites />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

export default router;
