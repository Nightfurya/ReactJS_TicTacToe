import React from "react";
import "./Square.css";

export default function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
      style={{
        color: props.value === "X" ? "green" : "red",
        background: props.value === "X" ? "lightgreen" : props.value === "O" ? "rgb(248, 133, 133)" : "transparent"
      }}
    >
      {props.value}
    </button>
  );
}
