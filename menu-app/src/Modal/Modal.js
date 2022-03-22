import React from "react";
import ReactDom from "react-dom";
import style from "./Modal.module.css";

// making backdrop and modaloverlay component on the same file
const Backdrop = (props) => {
  return (
    <div className={style.backdrop} onClick={props.hideModalHandler}></div>
  );
};
const ModalOverLay = (props) => {
  return (
    <div className={style.modal}>
      <div className={style.content}> {props.children}</div>
    </div>
  );
};

const portalPoint = document.getElementById("overlays");

function Modal(props) {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.hideModalHandler}></Backdrop>,
        portalPoint
      )}
      {ReactDom.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalPoint
      )}
    </React.Fragment>
  );
}

export default Modal;
