import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import SignUp from "../pages/SignUp/SignUp";

  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu/>,
        },
        {
          path: "/order/:category",
          element: <Order/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/signUp",
          element: <SignUp/>,
        },
      ],
    },
  ]);


  export default router;