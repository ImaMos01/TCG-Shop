import React from "react";
import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

const Home = lazy(() => import("./Pages/Home/Home.jsx"));
const Category = lazy(() => import("./Pages/Category/Category.jsx"));
const NotFoundPage = lazy(() =>
  import("./Pages/NotFoundPage/NotFoundPage.jsx")
);
const Product = lazy(() => import("./Pages/Product/Product.jsx"));
const Register = lazy(() => import("./Pages/Login/Register.jsx"));
const SignIn = lazy(() => import("./Pages/Login/SignIn.jsx"));
const ShoppCart = lazy(() => import("./Pages/ShoppingCart/ShoppCart.jsx"));
const MainLayout = lazy(() => import("./Layouts/MainLayout.jsx"));
const Checkout = lazy(() => import("./Pages/Checkout/Checkout.jsx"));
const Payment = lazy(() => import("./Pages/payment/Payment.jsx"));
const Search = lazy(() => import("./Pages/Search/Search.jsx"));
const Order = lazy(() => import("./Pages/Order/Order.jsx"));
const OrderView = lazy(() => import("./Pages/Order/OrderView.jsx"));
import UserAuth from "./guards/UserAuth.jsx";
import LoginAuth from "./guards/LoginAuth.jsx";

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
        <Route path="Search/:input" element={<Search />} />
        <Route element={<UserAuth />}>
          <Route path="Checkout" element={<Checkout />} />
          <Route path="History" element={<Order />} />
          <Route path="History/:id" element={<OrderView />} />
          <Route path="thx" element={<Payment />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route element={<LoginAuth />}>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Suspense fallback={<>Loading ...</>}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </Suspense>
    </ThemeContextProvider>
  </React.StrictMode>
);
