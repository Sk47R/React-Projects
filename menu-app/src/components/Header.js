import React from "react";
import style from "./Header.module.css";

import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <div className={style["heading__section"]}>
      <h1>Our Menu</h1>
      <HeaderButton showModalHandler={props.showModalHandler}></HeaderButton>
    </div>
  );
};

export default Header;
