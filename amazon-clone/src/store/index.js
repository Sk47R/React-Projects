import cartSlice from "./cart-slice";
import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./user-login";
import productSlice from "./product-item";

const store = configureStore({
  reducer: {
    log: loginSlice.reducer,
    cart: cartSlice.reducer,
    product: productSlice.reducer,
  },
});

export default store;
