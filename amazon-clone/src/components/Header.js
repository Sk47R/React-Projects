import React, { useState, useEffect } from "react";
import style from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import dummy_data from "../data";

const Header = (props) => {
  const [inputField, setInputField] = useState("");
  const [dataList, setDataList] = useState();
  const cartDataQuantity = useSelector((state) => state.cart.totalQuantity);
  const user = useSelector((state) => state.log.user);

  const onChangeHandler = (e) => {
    setInputField(e.target.value);
  };

  useEffect(() => {
    // const filteredData = cryptosList?.data?.coins.filter((coin) =>
    //   coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    const filteredData = dummy_data.filter((data) =>
      data.title.toLowerCase().includes(inputField.toLowerCase())
    );

    props.getData(filteredData);
  }, [inputField]);

  const handleLogOut = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className={style.header}>
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className={style["header__logo"]}
        ></img>
      </Link>
      <div className={style["header__search"]}>
        <input
          className={style["header__searchInput"]}
          type="text"
          onChange={onChangeHandler}
        ></input>
        <SearchIcon
          style={{ fontSize: 50 }}
          className={style["header__searchIcon"]}
        ></SearchIcon>
      </div>
      <div className={style["header__nav"]}>
        <Link to={!user && "/login"}>
          <div className={style["header__option"]} onClick={handleLogOut}>
            <span className={style["header__optionOne"]}>Hello, Guest</span>
            <span className={style["header__optionTwo"]}>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className={style["header__option"]}>
          <span className={style["header__optionOne"]}>Returns</span>
          <span className={style["header__optionTwo"]}>& Orders</span>
        </div>
        <div className={style["header__option"]}>
          <span className={style["header__optionOne"]}>Your</span>
          <span className={style["header__optionTwo"]}>Prime</span>
        </div>
        <Link to="/checkout">
          <div className={style["header__basket"]}>
            <ShoppingCartIcon />
            <span
              className={`${style["header__optionTwo"]} ${style["header__basketCount"]}`}
            >
              {cartDataQuantity}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
