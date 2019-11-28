import React, { Component } from "react";
import "../style/Button.css";

class Buttons extends Component {
  render() {
    // return buttons of calculator 
    // onClick has event & the event his target is the name of buttons
    return (
      <div>
        <div className="row">
          <button
            name="AC"
            className="clear-btn"
            onClick={e => this.props.onClick(e.target.name)}
          >
            C
          </button>
          <button
            name="CE"
            className="delete-btn"
            onClick={e => this.props.onClick(e.target.name)}
          >
            CE
          </button>
        </div>
        <div className="row">
          <button
            name="7"
            className="button-wrapper"
            onClick={e => this.props.onClick(e.target.name)}
          >
            7
          </button>
          <button
            name="8"
            className="button-wrapper"
            onClick={e => this.props.onClick(e.target.name)}
          >
            8
          </button>
          <button
            name="9"
            className="button-wrapper"
            onClick={e => this.props.onClick(e.target.name)}
          >
            9
          </button>
          <button
            name="/"
            className="button-wrapper operator"
            onClick={e => this.props.onClick(e.target.name)}
          >
            /
          </button>
        </div>
        <div className="row">
          <button
            name="6"
            className="button-wrapper"
            onClick={e => this.props.onClick(e.target.name)}
          >
            6
          </button>
          <button
            name="5"
            className="button-wrapper"
            onClick={e => this.props.onClick(e.target.name)}
          >
            5
          </button>
          <button
            name="4"
            className="button-wrapper"
            onClick={e => this.props.onClick(e.target.name)}
          >
            4
          </button>
          <button
            name="*"
            className="button-wrapper operator"
            onClick={e => this.props.onClick(e.target.name)}
          >
            *
          </button>
        </div>
        <div className="row">
          <button
            name="3"
            className="button-wrapper"
            onClick={e => this.props.onClick(e.target.name)}
          >
            3
          </button>
          <button
            name="2"
            className="button-wrapper"
            onClick={e => this.props.onClick(e.target.name)}
          >
            2
          </button>
          <button
            name="1"
            className="button-wrapper"
            onClick={e => this.props.onClick(e.target.name)}
          >
            1
          </button>
          <button
            name="+"
            className="button-wrapper operator"
            onClick={e => this.props.onClick(e.target.name)}
          >
            +
          </button>
        </div>
        <div className="row">
          <button
            name="."
            className="button-wrapper"
            onClick={e => this.props.onClick(e.target.name)}
          >
            .
          </button>
          <button
            name="0"
            className="button-wrapper"
            onClick={e => this.props.onClick(e.target.name)}
          >
            0
          </button>
          <button
            name="="
            className="button-wrapper"
            onClick={e => this.props.onClick(e.target.name)}
          >
            =
          </button>
          <button
            name="-"
            className="button-wrapper operator"
            onClick={e => this.props.onClick(e.target.name)}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Buttons;
