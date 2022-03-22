import React, { useContext } from "react";
import style from "./Toggle.module.css";
import sun from "../../img/sun.png";
import { ThemeContext } from "../../Context";

function Toggle() {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className={style.t}>
      <img src={sun} className={style["t-icon"]}></img>
      <img src={sun} className={style["t-icon"]}></img>
      <div
        className={style["t-button"]}
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : "25px" }}
      ></div>
    </div>
  );
}

export default Toggle;
