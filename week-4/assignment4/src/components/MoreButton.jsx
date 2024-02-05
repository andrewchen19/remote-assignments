const MoreButton = ({ setPage }) => {
  return (
    <div style={{ margin: "2rem 0", textAlign: "center" }}>
      <button type="button" onClick={() => setPage((prePage) => prePage + 1)}>
        More
      </button>
    </div>
  );
};

export default MoreButton;
