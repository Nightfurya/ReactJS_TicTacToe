import React, { Component } from "react";
import "./Game.css";
import EnterPopUp from "./Components/EnterPopUp/EnterPopUp";
import Header from "./Components/Header/Header";

class Game extends Component {
  render() {
    return (
      <>
        <EnterPopUp />;
        <Header />;
      </>
    );
  }
}

export default Game;
