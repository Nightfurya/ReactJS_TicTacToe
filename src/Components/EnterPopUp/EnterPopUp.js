import React, { Component } from "react";
import "./EnterPopUp.css";

class EnterPopUp extends Component {
  state = {
    hidden: false
  };

  hidePopup = () => {
    this.setState({
      hidden: !this.state.hidden
    });
  };

  render() {
    return (
      <div className="popup-wrapper" style={{ display: this.state.hidden ? "none" : "flex" }}>
        <div className="title">Do you wanna play with me?</div>
        <button className="accept-btn" onClick={this.hidePopup}>
          YES!
        </button>
      </div>
    );
  }
}

export default EnterPopUp;
