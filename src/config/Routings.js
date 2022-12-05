import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  AboutUs,
  ContactUs,
  MyAccount,
  Store,
  Cart,
  CardDetail,
  SubStore,
} from "../screens";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "store",
    element: <Store />,
  },
  {
    path: "aboutus",
    element: <AboutUs />,
  },
  {
    path: "contactus",
    element: <ContactUs />,
  },
  {
    path: "myaccount",
    element: <MyAccount />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "carddetail/:itemid",
    element: <CardDetail />,
  },
  {
    path: "substore/:category",
    element: <SubStore />,
  },
]);

const Routings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <RouterProvider router={router} />;
};

export default Routings;
