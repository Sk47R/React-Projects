import React from "react";
import style from "./InputForm.module.css";

const InputForm = React.forwardRef((props, ref) => {
  return (
    <div className={style.form}>
      <label htmlFor={props.input.id}>{props.input.label}</label>
      <input {...props.input} ref={ref}></input>
    </div>
  );
});

export default InputForm;
