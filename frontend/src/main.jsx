import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home/Home.jsx";
import Category from "./Pages/Category/Category.jsx";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage.jsx";
import Product from "./Pages/Product/Product.jsx";
import Register from "./Pages/Login/Register.jsx";
import SignIn from "./Pages/Login/SignIn.jsx";
import ShoppCart from "./Pages/ShoppingCart/ShoppCart.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import { ThemeContextProvider } from "./Context/ThemeContext.jsx";
import { Provider } from "react-redux";
import { store } from "./Store/store.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path=":Category" element={<Category />} />
        <Route path=":Category/:Id" element={<Product />} />
        <Route path="Cart" element={<ShoppCart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Register" element={<Register />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeContextProvider>
  </React.StrictMode>
);
