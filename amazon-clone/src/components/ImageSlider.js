import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import style from "./ImageSlider.module.css";

function ImageSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className={style.margin}
    >
      <Carousel.Item>
        <img
          className={style["home__image"]}
          src="https://m.media-amazon.com/images/I/71G7vKHnFZL._SX3000_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={style["home__image"]}
          src="https://m.media-amazon.com/images/I/61CX1noQ8nL._SX3000_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={style["home__image"]}
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={style["home__image"]}
          src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
          alt="fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default ImageSlider;
