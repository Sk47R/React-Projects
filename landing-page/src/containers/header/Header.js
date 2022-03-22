import React from "react";
import style from "./Header.module.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

function Header() {
  return (
    <div className={`${style["gpt3__header"]} ${"section__padding"}`} id="home">
      <div className={style["gpt3__header-content"]}>
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          aleration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className={style["gpt3__header-content__input"]}>
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Starter</button>
        </div>
        <div className={style["gpt3__header-content__people"]}>
          <img src={people} alt="people" />
          <p>1,600 people requested access a vist in last 24hrs</p>
        </div>
      </div>
      <div className={style["gpt3__header-image"]}>
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
