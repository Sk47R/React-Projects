import React from "react";
import style from "./Checkout.module.css";
import Subtotal from "./Subtotal";
import CheckoutItems from "./CheckoutItems";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartDataItems = useSelector((state) => state.cart.items);

  return (
    <div className={style.checkout}>
      <div className={style["checkout__left"]}>
        <img
          className={style["checkout__ad"]}
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_,jpg"
        ></img>
        <div className={style["checkout__container"]}>
          <h2 className={style["checkout__title"]}>
            {cartDataItems.length === 0
              ? "Your Amazon Cart is empty."
              : "Shopping Cart"}
          </h2>
          {cartDataItems.map((item) => (
            <CheckoutItems
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
              key={item.id}
              id={item.id}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>

      <div className={style["checkout__right"]}>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
