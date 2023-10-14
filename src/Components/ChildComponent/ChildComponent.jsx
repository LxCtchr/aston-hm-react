import React from "react";

import "./ChildComponent.css";

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null };
  }

  componentDidMount() {
    this.setState((state) => (state.value = this.props.textProp));
    console.log(this.props.arrayProp, this.props.funcProp());
  }

  render() {
    return (
      <>
        <label htmlFor="propInput"></label>
        <input
          type="text"
          name="propInput"
          placeholder={this.state.value}
          className="input"
        />
      </>
    );
  }
}

export default ChildComponent;
