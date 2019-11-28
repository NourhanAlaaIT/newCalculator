import React, { Component } from "react";
import "../style/Input.css";

class Input extends Component {
  render() {
    //return the screen of calculator
    return <div className="input">{this.props.children}</div>;
  }
}

export default Input;
