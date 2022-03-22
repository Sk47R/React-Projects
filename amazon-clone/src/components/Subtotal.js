import React from "react";
import style from "./Subtotal.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Subtotal = () => {
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cart);
  const totalPrice = cartData.totalAmount.toFixed(2);

  return (
    <div className={style.subtotal}>
      <p>
        Subtotal ({cartData.totalQuantity} items):{" "}
        <strong>${Math.abs(totalPrice)}</strong>
      </p>
      <small className={style["subtotal__gift"]}>
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
