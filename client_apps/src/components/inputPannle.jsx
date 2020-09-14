import React, { Component } from "react";
import axios from "axios";
import "../components/inputPannle.css";

class Inputpannle extends Component {
  constructor() {
    super();
    this.inputChange = this.inputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  state = { count: [], error: "" };

  formSubmit(e) {
    e.preventDefault();
  }

  async submitForm(e) {
    e.preventDefault();

    try {
      const returnValue = await axios
        .get(
          `https://fathomless-citadel-61453.herokuapp.com/count?count=${this.state.count}`
        )
        .then((res) => {
          this.props.updateFun(res.data);
        });
    } catch (err) {
      console.log("some erro occured", err);
    }
  }

  inputChange(e) {
    const inputvalue = Number(e.target.value);
    if (e.target.value === "") {
      this.setState({ error: "" });
    } else if (isNaN(inputvalue)) {
      this.setState({ error: "Please enter a valid Number" });
      return;
    }
    this.setState({ count: e.target.value });
    this.setState({ error: "" });
  }

  render() {
    const submitClass = this.state.count.length == 0 ? "disabled" : "";
    return (
      <form action="#" onSubmit={this.formSubmit}>
        <div className="file-field input-field">
          <a
            className={`waves-effect waves-light btn ${submitClass}`}
            name="submit"
            onClick={this.submitForm}
          >
            button
          </a>
          <input
            placeholder="Placeholder"
            id="first_name"
            type="text"
            className="validate"
            onChange={this.inputChange}
          ></input>
          {this.state.error != "" ? (
            <small className="danger">{this.state.error}</small>
          ) : (
            ""
          )}
        </div>
      </form>
    );
  }
}

export default Inputpannle;
