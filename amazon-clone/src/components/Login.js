import React, { useState } from "react";
import style from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
    setEmail("");
    setPassword("");
    // firebase login
  };
  const handleRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        // after successfully creating user with email and password, it will execute the then method
        // here auth is an object

        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));

    setEmail("");
    setPassword("");
    // firebase register
  };

  return (
    <React.Fragment>
      <div className={style["login"]}>
        <Link to="/">
          {" "}
          <img
            className={style["login__logo"]}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          ></img>
        </Link>
        <div className={style["login__container"]}>
          <h1>Sign-In</h1>
          <form>
            <h5>Email or mobile phone number</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button
              type="submit"
              className={style["login__signInButton"]}
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </form>
          <p>
            By signing-in you agree to Amazon's Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and out Interest-Based
            Ads
          </p>
        </div>
        <div className={style["login__new"]}>
          <div className={style["login__new-1"]}></div>
          <h5>New to Amazon?</h5>
          <div className={style["login__new-2"]}></div>
        </div>
        <button
          onClick={handleRegister}
          className={style["login__registerButton"]}
        >
          Create your Amazon Account
        </button>
      </div>
    </React.Fragment>
  );
};

export default Login;
