import React, { useReducer } from "react";
import CartContext from "./cartContext";

const defaultMealState = {
  items: [],
  totalAmount: 0,
};

const mealReducerFunction = (state, action) => {
  if (action.type === "ADD") {
    const newTotatAmount =
      state.totalAmount + action.item.price * action.item.quantity;
    // to check whether the meal is already present or not

    const existingMealItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // this will give the index of the item if it already exists.

    const exisitingMealItem = state.items[existingMealItemIndex];
    let updatedItems;
    if (exisitingMealItem) {
      const updatedItem = {
        ...exisitingMealItem,
        quantity: exisitingMealItem.quantity + action.item.quantity,

        // to add the total no of items
      };
      updatedItems = [...state.items];
      updatedItems[existingMealItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: newTotatAmount,
    };
  }

  if ((action.type = "REMOVE")) {
    const existingMealItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const exisitingMealItem = state.items[existingMealItemIndex]; //getting item itself
    const newTotalAmount = state.totalAmount - exisitingMealItem.price;
    let updatedItems;
    if (exisitingMealItem.quantity === 1) {
      // if the quantity if 1 then while decreasing we remove the item
      updatedItems = state.items.filter((item) => item.id !== action.id);
      //  with filter we filter the items we wanna keep and item we dont. i.e we keep the item with the id not equal to the id to which we are performing the action. i.e decreasing
    } else {
      const updatedItem = {
        ...exisitingMealItem,
        quantity: exisitingMealItem.quantity - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingMealItemIndex] = updatedItem;
      // if its not 1 then we only decrease the quantiy
    }
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }

  return defaultMealState;
};

const CartProvider = (props) => {
  const [mealState, dispatchFunction] = useReducer(
    mealReducerFunction,
    defaultMealState
  );
  // mealState is our state snapshot
  const addItemToCartHandler = (item) => {
    dispatchFunction({ type: "ADD", item: item });
  };
  const removeItemFormCartHandler = (id) => {
    dispatchFunction({ type: "REMOVE", id: id });
  };

  const cartContextValue = {
    items: mealState.items,
    totalAmount: mealState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFormCartHandler,
  };
  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
