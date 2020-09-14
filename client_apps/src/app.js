import React, { Component } from "react";
import Nav from "./components/navigationPannle";
import Inputpannle from "./components/inputPannle";
import Displaypannle from "./components/displayPannle";

class App extends Component {
  constructor() {
    super();
    this.updateCount = this.updateCount.bind(this);
  }
  state = { fizzbuzz: [] };

  updateCount(ref) {
    this.setState({ fizzbuzz: ref });
  }
  render() {
    return (
      <div className="container">
        <Nav />
        <Inputpannle updateFun={this.updateCount} />
        <Displaypannle displayValue={this.state.fizzbuzz} />
      </div>
    );
  }
}

export default App;
