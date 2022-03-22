import React, { useEffect, useState } from "react";
import style from "./Testimonial.module.css";

import { FaChevronLeft, FaChevronRight, FaVrCardboard } from "react-icons/fa";
import personData from "../personData";

const Testimonial = () => {
  const [personIndex, setPersonIndex] = useState(0);

  const controlOverFlow = (index) => {
    if (index > personData.length - 1) {
      return 0;
    } else if (index < 0) {
      return personData.length - 1;
    } else {
      return index;
    }
  };
  // controlOverFlow is the function which is used to control the overflow of the datas. like if we shift right greater than our total array, then we begin shifting from the start again and vise-versa

  useEffect(() => {
    const changePerson = setTimeout(() => {
      handleRightClick();
    }, 4000);

    return () => {
      clearTimeout(changePerson);
    };
  }, [personIndex]);

  const handleRightClick = () => {
    setPersonIndex((prevState) => {
      return controlOverFlow(prevState + 1);
    });
  };
  const handleLeftClick = () => {
    setPersonIndex((prevState) => {
      return controlOverFlow(prevState - 1);
    });
  };

  return (
    <div className={style["testimonial__section"]}>
      <div className={style["testimonial__section-arrow"]}>
        <div className={style["testimonial__section-arrow-left"]}>
          <FaChevronLeft size={24} color="grey" onClick={handleLeftClick} />
        </div>
        <div className={style["testimonial__section-arrow-right"]}>
          <FaChevronRight size={24} color="grey" onClick={handleRightClick} />
        </div>
      </div>

      <div className={style["testimonial__section-image"]}>
        <img src={personData[personIndex].image} alt="Person" />
      </div>
      <div className={style["testimonial__section-name"]}>
        <h4>{personData[personIndex].name}</h4>
      </div>
      <div className={style["testimonial__section-job"]}>
        <p>{personData[personIndex].occupation}</p>
      </div>
      <div className={style["testimonial__section-description"]}>
        <p> {personData[personIndex].description}</p>
      </div>
      <div className={style["testimonial__circles"]}>
        <div
          className={personIndex === 0 ? style["active"] : ""}
          onClick={() => {
            setPersonIndex(0);
          }}
        ></div>
        <div
          className={
            personIndex === 1
              ? `${style["testimonials__circles-mid"]} ${style.active}`
              : style["testimonials__circles-mid"]
          }
          onClick={() => {
            setPersonIndex(1);
          }}
        ></div>
        <div
          className={
            personIndex === 2
              ? `${style["testimonials__circles-mid_2"]} ${style.active}`
              : style["testimonials__circles-mid_2"]
          }
          onClick={() => {
            setPersonIndex(2);
          }}
        ></div>
        <div
          className={personIndex === 3 ? style.active : ""}
          onClick={() => {
            setPersonIndex(3);
          }}
        ></div>
      </div>
    </div>
  );
};

export default Testimonial;
