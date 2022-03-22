import React, { useRef, useContext } from "react";
import style from "./MealItems.module.css";
import InputForm from "./InputForm";
import CartContext from "../context/cartContext";

const MealItems = (props) => {
  const cartCtx = useContext(CartContext);
  const inputAmountRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const inputAmount = inputAmountRef.current.value;
    const inputAmountNumber = +inputAmount;
    if (
      inputAmount.trim().length === 0 ||
      inputAmountNumber > 5 ||
      inputAmountNumber < 1
    ) {
      return;
    }

    cartCtx.addItem({
      id: props.menu.id,
      name: props.menu.name,
      quantity: inputAmountNumber,
      price: props.menu.price,
    });
  };

  return (
    <div className={style["menu__list-div"]}>
      <div className={style["menu__list-image"]}>
        <img src={props.menu.image} alt={props.menu.name} />
      </div>
      <div className={style["menu__list-item"]}>
        <div className={style["menu__list-item__heading"]}>
          <div className={style["menu__list-heading"]}>
            <h2>{props.menu.name}</h2>
          </div>
          <div className={style["menu__list-price"]}>
            <p>${props.menu.price}</p>
          </div>
        </div>
        <div className={style["menu__list-item__description"]}>
          <p>{props.menu.description}</p>
        </div>
        <div className={style["menu__list-add"]}>
          <form onSubmit={formSubmitHandler}>
            <InputForm
              ref={inputAmountRef}
              label="Quantity"
              input={{
                id: props.menu.id,
                type: "number",
                min: "1",
                max: "5",
              }}
            />

            <button type="submit">+</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MealItems;
