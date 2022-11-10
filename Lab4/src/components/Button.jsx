import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <button className={`Button ${this.props.isDisabled ? "isDisabled" : ""}`} onClick={this.props.handleClick}>
        <div className="Button__Label">{this.props.label}</div>
      </button>
    );
  }
}
