import React from "react";
import style from "./Product.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { Link } from "react-router-dom";

const Product = ({ title, image, price, rating, id }) => {
  const dispatchFunction = useDispatch();

  const starArray = [];
  for (let i = 0; i < rating; i++) {
    starArray.push(i);
  }

  const addToCartHandler = () => {
    dispatchFunction(
      cartActions.addItemsToCart({
        title: title,
        image: image,
        price: price,

        rating: rating,
        id: id,
      })
    );
  };

  return (
    <div className={style.product}>
      <div className={style["product__info"]}>
        <Link to={`/${id}`}>
          <p>{title.length > 90 ? `${title.substring(0, 90)}...` : title}</p>
        </Link>
        <p className={style["product__price"]}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={style["product__rating"]}>
          {starArray.map((item) => (
            <p>⭐️</p>
          ))}
          {/* we provider star based on some value that we map over or iterate */}
        </div>
      </div>
      <div className={style["product__image"]}>
        <img src={image}></img>
      </div>
      <div className={style["product__button"]}>
        <button onClick={addToCartHandler}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
