import { createBrowserRouter } from "react-router-dom";
import Login from './../pages/Login';
import Register from './../pages/Register';
import AddTouristSpot from './../pages/AddTouristSpot';
import AllTouristSpot from './../pages/AllTouristSpot';
import MyList from './../pages/MyList';
import Root from './../Root';
import Home from './../pages/Home';
import ErrorPage from "../pages/ErrorPage";


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
          path: "/add",
          element: <AddTouristSpot />,
        },
        {
          path: "/all",
          element: <AllTouristSpot />,
        },
        {
          path: "/myList",
          element: <MyList />,
        },
      ],
    },    
  ]);