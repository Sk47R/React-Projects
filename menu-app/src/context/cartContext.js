import React from "react";
const CartContext = React.createContext({
  items: [],
  // array used to display in cart
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
