import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import style from "./Navbar.module.css";
import logo from "../../assets/logo.svg";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => {
    return (
      <>
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#wgpt3">What is GPT3?</a>
        </p>
        <p>
          <a href="#possibility">Open AI</a>
        </p>
        <p>
          <a href="#features">Case Studies</a>
        </p>
        <p>
          <a href="#blog">Library</a>
        </p>
      </>
    );
  };

  return (
    <div className={style["gpt3__navbar"]}>
      <div className={style["gpt3__navbar-links"]}>
        <div className={style["gpt3__navbar-links_logo"]}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style["gpt3__navbar-links_container"]}>
          <Menu />
        </div>
      </div>
      <div className={style["gpt3__navbar-sign"]}>
        <p>Sign in</p>
        <button type="button"> Sign up</button>
      </div>
      <div className={style["gpt3__navbar-menu"]}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            className={`${
              style["gpt3__navbar-menu_container"]
            } ${"scale-up-center"}`}
          >
            <div className={style["gpt3__navbar-menu_container-links"]}>
              <Menu />
              <div className={style["gpt3__navbar-menu_container-links-sign"]}>
                <p>Sign in</p>
                <button type="button"> Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
