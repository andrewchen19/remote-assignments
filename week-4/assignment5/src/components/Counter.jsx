const Counter = ({ id, number, increaseHandler }) => {
  return (
    <div className="counter">
      <button type="button" onClick={() => increaseHandler(id)}>
        + 1
      </button>
      <span>{number}</span>
    </div>
  );
};

export default Counter;
