import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <span className="badge bg-primary"> {this.formatCount()} </span>
        <button
          onClick={this.hasIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>{" "}
      </div>
    );
  }
  hasIncrement = () =>{
    this.setState({ count: this.state.count + 1 });
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
