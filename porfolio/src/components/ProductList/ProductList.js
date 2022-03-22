import React from "react";
import style from "./ProductList.module.css";
import Product from "../Product/Product";
import { products } from "../../data";

function ProductList() {
  return (
    <div className={style.pl}>
      <div className={style["pl-texts"]}>
        <h1 className={style["pl-title"]}>Create & inspire.</h1>
        <p className={style["pl-desc"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          voluptas in ducimus commodi corrupti excepturi.
        </p>
      </div>
      <div className={style["pl-list"]}>
        {products.map((item) => {
          return (
            <Product img={item.img} key={item.id} link={item.link}></Product>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
