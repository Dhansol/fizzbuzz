import React, { Component } from "react";
import "../components/navigationPannle.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="brand-logo">FizzBuzz</div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
