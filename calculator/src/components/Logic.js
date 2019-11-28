import React, { Component } from "react";
import Input from "./Input";
import Buttons from "./Buttons";

class Logic extends Component {
  state = {
    result: ""
  };

  onClick = val => {
    if (val === "=") {
      this.calc();
    } else if (val === "AC") {
      this.clearInput();
    } else if (val === "CE") {
      this.delete();
    } else if (val === ".") {
      this.addDecimal();
    } else if (val === "0") {
      this.addZeroToInput();
    } else {
      this.setState({
        result: this.state.result + val
      });
    }
  };
  // this function to prevent add zeros to input if the input is empty
  addZeroToInput = () => {
    if (this.state.result !== "") {
      this.setState({ result: this.state.result + 0 });
    }
  };
  // this function to add decimal to input if there is no decimal
  addDecimal = () => {
    if (this.state.result.indexOf(".") === -1) {
      this.setState({ result: this.state.result + "." });
    }
  };
  // this function to reset the input
  clearInput = () => {
    this.setState({ result: "" });
  };
  // this function to backspace
  delete = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };
  // this function to evaluate everything in the input
  // eval evaluates the inputs in state's result
  calc = () => {
    this.setState({
      result: (eval(this.state.result) || "") + ""
    });
  };

  render() {
    return (
      <React.Fragment>
        <Input>{this.state.result}</Input>
        <Buttons onClick={this.onClick}></Buttons>
      </React.Fragment>
    );
  }
}

export default Logic;
