import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import CountryDetails from "../pages/CountryDetails";
import ErrorPage from "../pages/ErrorPage";
import TourSpotDetails from "../pages/TourSpotDetails";
import UpdateTouristSpot from "../pages/UpdateTouristSpot";
import Root from './../Root';
import About from './../components/About';
import UpdateProfile from './../components/UpdateProfile';
import AddTouristSpot from './../pages/AddTouristSpot';
import AllTouristSpot from './../pages/AllTouristSpot';
import Home from './../pages/Home';
import Login from './../pages/Login';
import MyList from './../pages/MyList';
import Register from './../pages/Register';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('https://tourism-management-server-npieer5uj-margons-projects.vercel.app/allTouristSpot'),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addTouristSpot",
        element: <PrivateRoute><AddTouristSpot /></PrivateRoute>,
      },
      {
        path: "/allTouristSpot",
        element: <AllTouristSpot />,
        loader: () => fetch('https://tourism-management-server-npieer5uj-margons-projects.vercel.app/allTouristSpot'),

      },
      {
        path: "/allTouristSpot/:id",
        element: <PrivateRoute><TourSpotDetails /></PrivateRoute>,
        // loader: ({params}) => fetch(`https://tourism-management-server-npieer5uj-margons-projects.vercel.app/allTouristSpot/${params._id}`),
      },
      {
        path: "/myList",
        element: <PrivateRoute><MyList /></PrivateRoute>,

      },
      {
        path: "/myList/:id",
        element: <UpdateTouristSpot />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/updateProfile",
        element: <PrivateRoute><UpdateProfile /></PrivateRoute>,
      },
      {
        path: "/country/:id",
        element: <CountryDetails />,
      },
    ],
  },
]);