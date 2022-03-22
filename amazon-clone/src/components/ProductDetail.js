import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import style from "./ProductDetail.module.css";
import dummy_data from "../data";
import { cartActions, cartSlice } from "../store/cart-slice";
import { useDispatch } from "react-redux";

const ProductDetail = () => {
  const dispatchFunction = useDispatch();
  const param = useParams();
  const productId = param.productId;

  const [item] = dummy_data.filter((item) => item.id === productId);
  console.log(item);
  const starArray = [];
  for (let i = 0; i < item.rating; i++) {
    starArray.push(i);
  }
  const addToCartHandler = () => {
    dispatchFunction(
      cartActions.addItemsToCart({
        title: item.title,
        image: item.image,
        price: item.price,

        rating: item.rating,
        id: item.id,
      })
    );
  };

  return (
    <div className={style.productDetail}>
      <div className={style["productDetail__div"]}>
        <div className={style["productDetail__image"]}>
          <img src={item.image}></img>
        </div>
        <div className={style["productDetail__description"]}>
          <h2>{item.title}</h2>
          <p>
            {starArray.map((item) => (
              <p>⭐️</p>
            ))}
          </p>
          <p className={style["product__price"]}>
            <small>$</small>
            <strong>{item.price}</strong>
          </p>
          <h3 className={style["product__description"]}>
            Product Description:
          </h3>
          <p className={style["product__description-para"]}>
            {item.description}
          </p>
          <div className={style["submit__button"]}>
            <button onClick={addToCartHandler}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
