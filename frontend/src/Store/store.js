import { configureStore } from "@reduxjs/toolkit";
import { shopingCartSlice } from "../features/shopingCart/productSlice.js";
import { userSlice } from "../features/shopingCart/userSlice.js";

export const store = configureStore({
  reducer: { cart: shopingCartSlice.reducer, user: userSlice.reducer },
});
