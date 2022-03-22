import React from "react";
import style from "./CheckoutItems.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const CheckoutItems = (props) => {
  const dispatchFunction = useDispatch();

  const starArray = [];
  for (let i = 0; i < props.rating; i++) {
    starArray.push(i);
  }

  const addToCartHandler = () => {
    dispatchFunction(
      cartActions.addItemsToCart({
        title: props.title,
        image: props.image,
        price: props.price,

        rating: props.rating,
        id: props.id,
      })
    );
  };
  const removeFromCartHandler = () => {
    dispatchFunction(cartActions.removeItemFromTheCart(props.id));
  };
  const removeAllItem = () => {
    dispatchFunction(cartActions.removeItems(props.id));
  };

  return (
    <div className={style["checkoutItem"]}>
      <img src={props.image} className={style["checkoutItem__image"]}></img>
      <div className={style["checkoutItem__info"]}>
        <p className={style["checkoutItem__title"]}>{props.title}</p>
        <p className={style["checkoutItem__price"]}>
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className={style["checkoutItem__rating"]}>
          {starArray.map((item) => (
            <p>⭐️</p>
          ))}
        </div>
        <div className={style["checkoutItem__icon"]}>
          <p>Quantity: {props.quantity}</p>
          <RemoveCircleOutlineIcon
            className={style["remove"]}
            onClick={removeFromCartHandler}
          />
          <AddCircleOutlineIcon
            className={style["add"]}
            onClick={addToCartHandler}
          />
        </div>
        <button
          className={style["checkoutItem__button"]}
          onClick={removeAllItem}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default CheckoutItems;
