import React from "react";

import "./ChildComponent.css";

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null };
    this.handleClick = this.handleClick.bind(this);
    this.focusRef = React.createRef();
  }

  componentDidMount() {
    console.log("Mount");
  }

  componentDidUpdate() {
    console.log("Update");
    console.log(this.state.value);
  }

  handleClick(event) {
    event.preventDefault();
    this.focusRef.current.focus();
  }

  render() {
    return (
      <form className="form">
        <label htmlFor="propInput"></label>
        <input
          type="text"
          name="propInput"
          placeholder={this.state.value}
          className="input"
          ref={this.focusRef}
        />
        <button
          type="submit"
          className="form__button"
          onClick={this.handleClick}
        >
          Фокус
        </button>
      </form>
    );
  }
}

export default ChildComponent;
