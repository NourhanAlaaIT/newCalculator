import React, { Component } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Input from "./components/Input";

class App extends Component {
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
  addZeroToInput = () => {
    if (this.state.result !== "") {
      this.setState({ result: this.state.result + 0 });
    }
  };
  addDecimal = () => {
    if (this.state.result.indexOf(".") === -1) {
      this.setState({ result: this.state.result + "." });
    }
  };
  clearInput = () => {
    this.setState({ result: "" });
  };
  delete = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };
  calc = () => {
    this.setState({
      result: (eval("this.state.result") || "") + ""
    });
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input>{this.state.result}</Input>
          <Buttons
            numbers={this.state.numbers}
            operators={this.state.operators}
            onClick={this.onClick}
          ></Buttons>
        </div>
      </div>
    );
  }
}

export default App;
