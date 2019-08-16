import React, { Component } from "react";
import "./Game.css";
import EnterPopUp from "./Components/EnterPopUp/EnterPopUp";
import Header from "./Components/Header/Header";
import Board from "./Components/Board/Board";

class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null) }],
    isXNext: true,
    stepNumber: 0
  };

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const filledSquares = current.squares.slice();

    if (this.calculateWinner(filledSquares) || filledSquares[i]) {
      return;
    }
    filledSquares[i] = this.state.isXNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: filledSquares
        }
      ]),
      isXNext: !this.state.isXNext,
      stepNumber: history.length
    });
  }

  calculateWinner = filledSquares => {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    const linesLength = lines.length;
    for (let i = 0; i < linesLength; i++) {
      const [a, b, c] = lines[i];
      if (filledSquares[a] && filledSquares[a] === filledSquares[b] && filledSquares[a] === filledSquares[c]) {
        return filledSquares[a];
      }
    }
    return null;
  };

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      isXNext: step % 2 === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move № " + move : "Go to game start";
      return (
        <li key={move}>
          <button className="move-to-btn" onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Победитель: " + winner;
    } else {
      status = "Следующий игрок: " + (this.state.isXNext ? "X" : "O");
    }

    return (
      <>
        <EnterPopUp />
        <Header />
        <div className="game">
          <div className="game-board">
            <Board squares={current.squares} onClick={i => this.handleClick(i)} />
          </div>
          <div className="game-info">
            <div className="game-info-winner">{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      </>
    );
  }
}

export default Game;
