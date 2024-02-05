const GenerateButton = ({ generateHandler }) => {
  return (
    <div style={{ display: "flex" }}>
      <button type="button" onClick={generateHandler}>
        Add a Counter
      </button>
    </div>
  );
};

export default GenerateButton;
