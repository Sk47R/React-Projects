import React from "react";
import style from "./CTA.module.css";

function CTA() {
  return (
    <div className={style["gpt3__cta"]}>
      <div className={style["gpt3__cta-content"]}>
        <p>Request Early Access to get Started</p>
        <h2>Register today & start exploring the endless possibilities.</h2>
      </div>
      <div className={style["gpt3__cta-button"]}>
        <button type="button">Get Started</button>
      </div>
    </div>
  );
}

export default CTA;
