import React, { Component } from "react";
import { Countdown } from "./countdown";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Countdown>{counter => <span>{counter}</span>}</Countdown>
      </div>
    );
  }
}

export default App;
