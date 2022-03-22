import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "cartSlice",
  initialState: {
    user: null,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state, action) {
      state.user = action.payload;
    },
  },
});

// for exporting the reducer actions
export const logActions = loginSlice.actions;

export default loginSlice;
