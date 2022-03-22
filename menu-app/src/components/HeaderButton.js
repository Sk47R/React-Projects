import React, { useContext } from "react";
import style from "./HeaderButton.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from "../context/cartContext";

const HeaderButton = (props) => {
  const cartContextData = useContext(CartContext);
  const numberOfCartItem = cartContextData.items.reduce((acc, currItem) => {
    return acc + currItem.quantity;
  }, 0);

  return (
    <button
      type="button"
      className={style["button"]}
      onClick={props.showModalHandler}
    >
      <span className={style.icon}>
        <AiOutlineShoppingCart size={24}></AiOutlineShoppingCart>
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderButton;
