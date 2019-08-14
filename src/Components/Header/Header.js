import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="title header__title">Tic Tac Toe Game</div>
        <div className="subtitle header__subtitle">Good luck & Have fun!</div>
      </header>
    );
  }
}

export default Header;
