import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Category from "./Pages/Category/Category.jsx";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage.jsx";
import Product from "./Pages/Product/Product.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Register from "./Pages/Login/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/YuGiOh",
    element: <Category />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/Pokemon",
    element: <Category />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/Digimon",
    element: <Category />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/Magic",
    element: <Category />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/Product",
    element: <Product />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/Register",
    element: <Register />,
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
