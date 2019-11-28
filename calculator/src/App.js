import React, { Component } from "react";
import "./App.css";
import Logic from "./components/Logic";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Logic />
        </div>
      </div>
    );
  }
}

export default App;
