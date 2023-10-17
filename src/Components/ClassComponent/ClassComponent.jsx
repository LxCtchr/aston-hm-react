import React from "react";

import ChildComponent from "../ChildComponent/ChildComponent.jsx";
import "./ClassComponent.css";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "from state value" };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("Mount");
  }

  componentDidUpdate() {
    console.log("Update");
  }

  componentWillUnmount() {
    console.log("Unmount");
  }

  handleClick(event) {
    event.preventDefault();
    this.setState((prevState) => (prevState.value = 12345678));
  }

  render() {
    return (
      <>
        <form className="form">
          <label htmlFor="testInput"></label>
          <input type="text" name="testInput" placeholder={this.state.value} />
          <button
            type="submit"
            className="form__button"
            onClick={this.handleClick}
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
      </>
    );
  }
}

export default ClassComponent;
