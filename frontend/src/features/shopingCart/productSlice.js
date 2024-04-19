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
        const { id, quantity, price } = action.payload;
        const foundProduct = state.find((it) => it.id === id);
        if (foundProduct) {
          if (quantity > 1) foundProduct.quantity = quantity;
          else foundProduct.quantity += quantity;
          foundProduct.price = parseFloat(
            foundProduct.quantity * price
          ).toFixed(2);
        } else {
          state.push(action.payload);
        }
      }
    },
    deleteCart: (state, action) => {
      const foundProduct = state.find((task) => task.id === action.payload);
      if (foundProduct) {
        state.splice(state.indexOf(foundProduct), 1);
      }
    },
  },
});

export const { createCart, updateCart, deleteCart } = shopingCartSlice.actions;

export default shopingCartSlice.reducer;
