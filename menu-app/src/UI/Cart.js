import React, { useContext } from "react";
import CartContext from "../context/cartContext";
import Modal from "../Modal/Modal";
import style from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const mealItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const mealItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onRemove={() => {
              mealItemRemoveHandler(item.id);
            }}
            // onRemove={mealItemRemoveHandler.bind(null, item.id)}
            // this binding ensures that the id of the meal to be removed is passed to the mealItemRemoveHandler function
            onAdd={() => {
              mealItemAddHandler(item);
            }}
          ></CartItem>
        );
      })}
    </ul>
  );

  return (
    <Modal hideModalHandler={props.hideModalHandler}>
      {/* {cardItems} */}
      {cartItems}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={style.actions}>
        <button
          className={style["button--alt"]}
          onClick={props.hideModalHandler}
        >
          Close
        </button>
        <button className={style.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
