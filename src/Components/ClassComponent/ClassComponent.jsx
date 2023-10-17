import React from "react";

import ChildComponent from "../ChildComponent/ChildComponent.jsx";
import FuncComponent from "../funcComponent/FuncComponent.jsx";
import "./ClassComponent.css";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "from state value" };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log("Mount");
  }

  componentDidUpdate() {
    console.log("Update");
    console.log(this.state.value);
  }

  componentWillUnmount() {
    console.log("Unmount");
  }

  handleChange(event) {
    this.setState((prevState) => (prevState.value = event.target.value));
  }

  render() {
    return (
      <React.Fragment>
        <form className="form">
          <label htmlFor="testInput"></label>
          <input
            type="text"
            name="testInput"
            placeholder={this.state.value}
            onChange={this.handleChange}
          />
          <button
            type="submit"
            className="form__button"
            disabled={this.state.value === "реакт"}
          >
            Подтвердить
          </button>
        </form>
        <ChildComponent
          numberProp={123}
          textProp="text from parent prop"
          booProp
          funcProp={function () {
            console.log("Func prop was called");
          }}
          arrayProp={[1, 2, 3, 4, 5]}
        />
        <FuncComponent numbers={[1, 2, 3, 4, 5]} />
      </React.Fragment>
    );
  }
}

export default ClassComponent;
