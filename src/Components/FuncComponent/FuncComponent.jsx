import "./FuncComponent.css";

const FuncComponent = (props) => {
  const numbers = props.numbers;
  const listItems = numbers.map((number, index) => (
    <li key={index}>{number}</li>
  ));
  return (
    <div className="list">
      <ul>{listItems}</ul>
    </div>
  );
};

export default FuncComponent;
