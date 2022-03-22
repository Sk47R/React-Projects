import { createSlice } from "@reduxjs/toolkit";
import dummy_data from "../data";

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    items: dummy_data,
  },
  reducers: {
    onChange(state, action) {
      state.items = action.payload;
    },
  },
});

// for exporting the reducer actions
export const productActions = productSlice.actions;

export default productSlice;
