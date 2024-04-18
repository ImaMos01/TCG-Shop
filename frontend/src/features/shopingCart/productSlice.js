import { createSlice } from "@reduxjs/toolkit";

export const shopingCartSlice = createSlice({
  name: "shopingCart",
  initialState: [],
  reducers: {
    createCart: (state, action) => {
      return action.payload;
    },
    updateCart: (state, action) => {
      if (!state) state.push(action.payload);
      else {
        const { id } = action.payload;
        const foundProduct = state.find((it) => it.id === id);
        if (foundProduct) {
          foundProduct.quantity += 1;
        } else {
          state.push(action.payload);
        }
      }
    },
    resetCart: () => [],
  },
});

export const { createCart, updateCart, resetCart } = shopingCartSlice.actions;

export default shopingCartSlice.reducer;
