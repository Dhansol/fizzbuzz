import React, { Component } from "react";
import "../components/displayPannle.css";
class Displaypannle extends Component {
  constructor() {
    super();
    const fizzbuzz = [];
  }

  render() {
    this.fizzbuzz = this.props.displayValue;
    return (
      <React.Fragment>
        <div className="display-container">
          {this.fizzbuzz
            ? this.fizzbuzz.map((value, index) => {
                return (
                  <p className="fizbuz" key={index}>{`${
                    index + 1
                  }: ${value}`}</p>
                );
              })
            : ""}
        </div>
      </React.Fragment>
    );
  }
}

export default Displaypannle;
