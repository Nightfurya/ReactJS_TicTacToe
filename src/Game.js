import React, { Component } from "react";
import "./Game.css";
import EnterPopUp from "./Components/EnterPopUp/EnterPopUp";
import Header from "./Components/Header/Header";
import Board from "./Components/Board/Board";

class Game extends Component {
  render() {
    return (
      <>
        <EnterPopUp />
        <Header />
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
        </div>
      </>
    );
  }
}

export default Game;
