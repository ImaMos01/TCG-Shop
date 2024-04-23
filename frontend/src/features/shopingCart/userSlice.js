import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: [],
  reducers: {
    createUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state) => {
      state.pop();
    },
  },
});

export const { createUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
