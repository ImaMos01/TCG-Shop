import { createSlice } from "@reduxjs/toolkit";

export const shopingCartSlice = createSlice({
  name: "shopingCart",
  initialState: [],
  reducers: {
    createCart: (state, action) => {
      return action.payload;
    },
    updateCart: (state, action) => {
      //add to cart by itemCart thumbnail
      if (!state) {
        //shopping cart empty
        const { quantity } = action.payload;

        if (quantity > 1) {
          action.payload.price *= quantity;
        }

        state.push(action.payload);
      } else {
        const { id, quantity, price } = action.payload;
        const foundProduct = state.find((it) => it.id === id);

        if (foundProduct) {
          foundProduct.quantity += quantity;
          const tempPrice = parseFloat(price).toFixed(2);
          foundProduct.price = foundProduct.quantity * tempPrice;
        } else {
          if (quantity > 1) {
            action.payload.price *= quantity;
          }
          state.push(action.payload);
        }
      }
    },
    updateQty: (state, action) => {
      //increase the quantity of products in the shopping cart page
      const { id, quantity, originPrice } = action.payload;
      const foundProduct = state.find((it) => it.id === id);
      if (foundProduct) {
        foundProduct.quantity = quantity;
        const tempPrice = parseFloat(originPrice).toFixed(2);
        foundProduct.price = foundProduct.quantity * tempPrice;
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

export const { createCart, updateCart, updateQty, deleteCart } =
  shopingCartSlice.actions;

export default shopingCartSlice.reducer;
