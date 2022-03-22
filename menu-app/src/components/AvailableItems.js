import React from "react";

import style from "./AvailableItems.module.css";

import MealItems from "./MealItems";

const MenuItems = ({ MenuData }) => {
  const menuList = MenuData.map((menu) => {
    return (
      <li className={style["menu__list"]} key={menu.id}>
        <MealItems menu={menu}></MealItems>
      </li>
    );
  });

  return <ul className={style["menu__main"]}>{menuList}</ul>;
};

export default MenuItems;
