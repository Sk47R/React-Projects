// This component is for the container with rounded corner and some drop shadow
//   here the props.children is received by every component made in react
// children is the reserved keyword which stores the value that is inside the opening and closing tag of card compoenent
import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
