import React from "react";
import style from "./Product.module.css";
import onepiece from "../../img/robin.jpg";

function Product(props) {
  return (
    <div className={style.p}>
      <div className={style["p-browser"]}>
        <div className={style["p-circle"]}></div>
        <div className={style["p-circle"]}></div>
        <div className={style["p-circle"]}></div>
      </div>
      <a href="props.link" target="_blank" rel="noreferrer">
        <img src={onepiece} className={style["p-img"]}></img>
      </a>
    </div>
  );
}

export default Product;
