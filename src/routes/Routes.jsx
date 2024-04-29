import { createBrowserRouter } from "react-router-dom";
import Login from './../pages/Login';
import Register from './../pages/Register';
import AddTouristSpot from './../pages/AddTouristSpot';
import AllTouristSpot from './../pages/AllTouristSpot';
import MyList from './../pages/MyList';
import Root from './../Root';
import Home from './../pages/Home';
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "../components/PrivateRoute";
import About from './../components/About';


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: "/",
            element: <Home/>,
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
          element: <PrivateRoute><AddTouristSpot /></PrivateRoute> ,
        },
        {
          path: "/allTouristSpot",
          element: <AllTouristSpot />,
          loader: () => fetch('http://localhost:5000/allTouristSpot'),
        },
        {
          path: "/myList",
          element:<PrivateRoute><MyList /></PrivateRoute> ,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },    
  ]);