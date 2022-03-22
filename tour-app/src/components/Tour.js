import React from "react";
import { useState } from "react/cjs/react.development";
import style from "./Tour.module.css";

const Tour = (props) => {
  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  const [readMore, setReadMore] = useState(false);
  return (
    <section className={style["tour__section"]}>
      <div className={style["tour__section-card"]}>
        <div className={style["tour__section-image"]}>
          <img src={props.image}></img>
        </div>
        <div className={style["tour__section-div"]}>
          <div className={style["tour__section-heading"]}>
            <h3>{props.destiny}</h3>
          </div>
          <div className={style["tour__section-price"]}>
            <p>Rs. {props.price}</p>
          </div>
        </div>
        <div className={style["section__tour-description"]}>
          <p>
            {readMore
              ? `${props.description}`
              : `${props.description.substring(0, 200)}...`}
            <button onClick={handleReadMore} className={style.read}>
              {readMore ? "Show Less" : "Read More"}{" "}
            </button>
          </p>
        </div>
        <div className={style["tour__section-button"]}>
          <button
            type="button"
            onClick={() => {
              props.removeTour(props.id);
            }}
          >
            Not Interested
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tour;
