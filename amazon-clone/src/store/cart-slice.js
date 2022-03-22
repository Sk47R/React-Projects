import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItemsToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalAmount = state.totalAmount + newItem.price;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          description: newItem.description,
          image: newItem.image,
          rating: newItem.rating,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    removeItemFromTheCart(state, action) {
      const newId = action.payload;
      const existingItem = state.items.find((item) => item.id === newId);
      state.totalQuantity--;
      state.totalAmount = state.totalAmount - existingItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== newId);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    removeItems(state, action) {
      const newId = action.payload;
      const existingItem = state.items.find((item) => item.id === newId);
      state.totalQuantity -= existingItem.quantity;
      state.totalAmount =
        state.totalAmount - existingItem.price * existingItem.quantity;
      state.items = state.items.filter((item) => item.id !== newId);
    },
    clearItems(state, action) {
      state = {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
      };
    },
  },
});
// for exporting the reducer actions
export const cartActions = cartSlice.actions;

export default cartSlice;
