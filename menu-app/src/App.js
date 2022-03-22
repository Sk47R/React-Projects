import React, { useState } from "react";
import "./App.css";

import MenuData from "../src/MenuData";
import Category from "../src/components/Category";
import Header from "./components/Header";
import Cart from "./UI/Cart";
import CartProvider from "./context/CartProvider";
import AvailabeItems from "../src/components/AvailableItems";

const findCategory = ["All", ...new Set(MenuData.map((data) => data.type))];

// this findCategory is used to get the unique value of categories

const App = () => {
  const [menuItem, setMenuItem] = useState(MenuData);
  const [categories, setCategories] = useState(findCategory);

  const [modalShow, setModalShow] = useState(false);

  const showModalHandler = () => {
    setModalShow(true);
  };
  const hideModalHandler = () => {
    setModalShow(false);
  };

  const functionFilter = (category) => {
    // This functionFilter is to filter the menu according to the type like appetizer, main course etc.

    if (category === "All") {
      setMenuItem(MenuData);
      return;
    }

    const newItem = MenuData.filter((item) => {
      return item.type === category;
    });
    setMenuItem(newItem);
  };

  return (
    <CartProvider className="app__container">
      <Header showModalHandler={showModalHandler}></Header>
      {modalShow && <Cart hideModalHandler={hideModalHandler} />}

      <Category
        MenuData={menuItem}
        categories={categories}
        functionFilter={functionFilter}
      ></Category>

      <AvailabeItems MenuData={menuItem}></AvailabeItems>
    </CartProvider>
  );
};

export default App;
