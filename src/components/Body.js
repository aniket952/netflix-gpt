import React from "react";
import Browse from "./Browse";
import LoginScreen from "./LoginScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <LoginScreen />,
    },
    {
      path: "/browser",
      element: <Browse />,
    },
  ]);

  return <RouterProvider router={approuter} />;
};

export default Body;
