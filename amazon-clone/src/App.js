import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { logActions } from "./store/user-login";
import { productActions } from "./store/product-item";
import { useDispatch } from "react-redux";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";
import ProductDetail from "./components/ProductDetail";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";

const promise = loadStripe(
  "pk_test_51K80kIJvjrsid8ngWAJaMW47NN51Err8blUdW6OW3U2onUQVqHTW3EJseKrm7fUG6jK0TAOA0uKYkR1KqV5ne6iz0065R3tMIb"
);
// this is a public key

function App() {
  const [getDataProp, setGetDataProp] = useState();
  const dispatchFunction = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatchFunction(logActions.login(authUser));

        // user just loggedIn/ the user was logged in
      } else {
        dispatchFunction(logActions.logout(null));
        // the user is logged out
      }
    });
    // this is a listener that listen if we login and logout(it refire everytime we login or logout)
  }, []);

  const getData = (data) => {
    dispatchFunction(productActions.onChange(data));
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Header getData={getData} />
              <Home />
              <Footer />
            </Fragment>
          }
        ></Route>
        <Route
          path="/:productId"
          element={
            <Fragment>
              <Header getData={getData} />
              <ProductDetail></ProductDetail>
            </Fragment>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <Fragment>
              <Header getData={getData} />
              <Orders />
            </Fragment>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Fragment>
              <Login />
            </Fragment>
          }
        ></Route>

        <Route
          path="/payment"
          element={
            <Fragment>
              <Header getData={getData} />
              <Elements stripe={promise}>
                {/* higher order component */}
                <Payment />
              </Elements>
            </Fragment>
          }
        ></Route>

        <Route
          path="/checkout"
          element={
            <Fragment>
              <Header getData={getData} />
              <Checkout />
            </Fragment>
          }
        ></Route>

        <Route
          path="*"
          element={
            <Fragment>
              <Header getData={getData} />
              <Home />
            </Fragment>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
