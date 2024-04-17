import { configureStore } from "@reduxjs/toolkit";
import { shopingCartSlice } from "../features/shopingCart/productSlice.js";

export const store = configureStore({
  reducer: { cart: shopingCartSlice.reducer },
});
