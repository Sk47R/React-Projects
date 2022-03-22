import React from "react";
import Intro from "../Intro/Intro";
import style from "./About.module.css";
import tommy from "../../img/tommy.jpeg";

function About() {
  return (
    <div className={style.about}>
      <div className={style["about-left"]}>
        <div className={`${style["about-card"]} ${style["bg"]}`}>
          {/* this card is for the shadow */}
        </div>
        <div className={style["about-card"]}>
          <img src={tommy} className={style["about-img"]}></img>
        </div>
      </div>
      <div className={style["about-right"]}>
        <h1 className={style["about-title"]}>About Me</h1>
        <p className={style["about-sub"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          aliquid.
        </p>
        <p className={style["about-desc"]}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          iure quis dolor perspiciatis, quasi reiciendis, modi, nisi blanditiis
          ad architecto velit expedita optio tempora omnis? Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Repudiandae iure quis dolor
          perspiciatis, quasi reiciendis, modi, nisi blanditiis, ad architecto
          velit
        </p>
      </div>
    </div>
  );
}

export default About;
