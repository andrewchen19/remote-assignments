const IncreaseAllButton = ({ allIncreaseHandler }) => {
  return (
    <div style={{ display: "flex" }}>
      <button type="button" onClick={allIncreaseHandler}>
        All + 1
      </button>
    </div>
  );
};

export default IncreaseAllButton;
