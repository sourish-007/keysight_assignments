import React from "react";
class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  add = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  subtract = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  reset = () => {
    this.setState({ counter: 0 });
  };
  render() {
    return (
      <div>
        <button onClick={this.add}>Add</button>
        <br /><br />
        <button onClick={this.subtract}>Subtract</button>
        <br /><br />
        <button onClick={this.reset}>Reset</button>
        <br /><br />
        <h3>Counter : {this.state.counter}</h3>
      </div>
    );
  }
}

export default CounterApp;