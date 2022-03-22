import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={style["footer__head"]}>
        <p>Back to top</p>
      </div>
      <section className={style.footer}>
        <div className={style["footer__div"]}>
          <div className={style["footer__content"]}>
            <ul>
              <li>
                <h5>Get to Know Us</h5>
              </li>
              <li>
                <a>Careers</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>About Amazon</a>
              </li>
              <li>
                <a>Investor Relations</a>
              </li>
              <li>
                <a>Amazon Devices</a>
              </li>
            </ul>
          </div>
          <div className={style["footer__content"]}>
            <ul>
              <li>
                <h5>Make Money with Us</h5>
              </li>
              <li>
                <a>Sell products on Amazon</a>
              </li>
              <li>
                <a>Sell on Amazon Business</a>
              </li>
              <li>
                <a>Sell apps on Amazon</a>
              </li>
              <li>
                <a>Become an Affiliate</a>
              </li>
              <li>
                <a>Advertise Your Products</a>
              </li>
              <li>
                <a>Self-Publish with Us</a>
              </li>
              <li>
                <a>Host an Amazon Hub</a>
              </li>
            </ul>
          </div>
          <div className={style["footer__content"]}>
            <ul>
              <li>
                <h5>Amazon Payment Products</h5>
              </li>
              <li>
                <a>Amazon Business Card</a>
              </li>
              <li>
                <a>Shop with Points</a>
              </li>
              <li>
                <a>Reload Your Balance</a>
              </li>
              <li>
                <a>Amazon Currency Converter</a>
              </li>
            </ul>
          </div>
          <div className={style["footer__content"]}>
            <ul>
              <li>
                <h5>Let Us Help You</h5>
              </li>
              <li>
                <a>Amazon and COVID-19</a>
              </li>
              <li>
                <a>Your Account</a>
              </li>
              <li>
                <a>Your Orders</a>
              </li>
              <li>
                <a>Shipping Rates & Policies</a>
              </li>
              <li>
                <a>Returns & Replacements</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Footer;
