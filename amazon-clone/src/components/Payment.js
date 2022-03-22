import React, { useEffect, useState } from "react";
import style from "./Payment.module.css";
import { useSelector } from "react-redux";
import CheckoutItems from "./CheckoutItems";
import { Link } from "react-router-dom";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router";
import axios from "./axios";
import { cartActions } from "../store/cart-slice";
import { useDispatch } from "react-redux";
import { db } from "../firebase";

const Payment = () => {
  const dispatchFunction = useDispatch();
  const cartDataItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.log.user);
  const cartData = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const totalPrice = cartData?.totalAmount?.toFixed(2);
  // For stripe functionality
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // stripe expects the total in a currencies subunits
        url: `/payments/create?total=${Math.abs(totalPrice) * 100}`,
      });

      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cartData]);

  console.log("the secret is >>>", clientSecret);

  const submitHandler = async (e) => {
    // stripe stuffs
    e.preventDefault();
    setProcessing(true); // will prevent from  clicking buy button multiple times

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        console.log(user.uid);
        console.log(paymentIntent.id);
        // storing to db
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent?.id)
          .set({
            cartDataItems: cartDataItems,
            totalAmount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        // storing to db

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatchFunction(cartActions.clearItems());

        navigate("/orders");
      });
  };

  const changeHandler = (e) => {
    /* what we do here is
      listen to the changes in CardElement
      and display any errors as the customer types their card details
    */
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  // For stripe functionality

  return (
    <div className={style["payment"]}>
      <div className={style["payment__container"]}>
        <h1>
          Checkout (<Link to="/checkout">{cartDataItems?.length} items</Link>)
        </h1>
        {/* payment section - delivery address */}
        <div className={style["payment__section"]}>
          <div className={style["payment__title"]}>
            <h3>Delivery Address</h3>
          </div>
          <div className={style["payment__address"]}>
            <p>Email</p>
            <p>Address</p>
          </div>
        </div>

        {/* payment section - Review Items */}
        <div className={style["payment__section"]}>
          <div className={style["payment__title"]}>
            <h3>Review items and delivery</h3>
          </div>
          <div className={style["payment__items"]}>
            {/* all the products in the basket */}
            {cartDataItems.map((item) => (
              <CheckoutItems
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
                key={item.id}
                id={item.id}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>
        {/* payment section - Payment method */}
        <div className={style["payment__section"]}>
          <div className={style["payment__title"]}>
            <h3>Payment Method</h3>
          </div>
          <div className={style["payment__details"]}>
            <form onSubmit={submitHandler}>
              <CardElement onChange={changeHandler} />
              <div className={style["payment__priceContainer"]}>
                <h3>Order Total: ${Math.abs(totalPrice)}</h3>
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
