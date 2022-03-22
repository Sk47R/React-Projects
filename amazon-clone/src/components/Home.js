import React, { useState, useEffect } from "react";
import style from "./Home.module.css";
import Product from "./Product";
import dummy_data from "../data";
import { useSelector } from "react-redux";
import ImageSlider from "./ImageSlider";

const Home = (props) => {
  const products = useSelector((state) => state.product.items);

  return (
    <div className={style.home}>
      <div className={style["home__container"]}>
        {/* <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42864220_.jpg"
          className={style["home__image"]}
        ></img> */}
        <ImageSlider></ImageSlider>
        <div className={style["home__row"]}>
          {products.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            ></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
