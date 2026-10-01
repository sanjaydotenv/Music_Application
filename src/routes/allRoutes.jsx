import Dashboard from "../pages/Dashboard";
import Discover from "../pages/Discover";
import Favorites from "../pages/Favorites";
import UploadSong from "../pages/UploadSong";

export const userRoutes = [
  {
    path: "",
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
    }
];
