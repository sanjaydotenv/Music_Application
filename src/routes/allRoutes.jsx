import Dashboard from "../pages/Dashboard";
import Discover from "../pages/Discover";
import Favorites from "../pages/Favorites";
import MySongs from "../pages/MySongs";
import Profile from "../pages/Profile";
import UploadSong from "../pages/UploadSong";

export const userRoutes = [
  {
    path: "discover",
    element: <Discover />,
  },
  {
    path: "favorite",
    element: <Favorites />,
  },
];

export const artistRoutes = [
    {
        path: "",
        element: <Dashboard />
    },
    {
        path: "uploadSong",
        element: <UploadSong />
    },
    {
      path: "/main/songs",
      element: <MySongs />
    },
    {
      path: "/main/profile",
      element:<Profile />
    }
];
