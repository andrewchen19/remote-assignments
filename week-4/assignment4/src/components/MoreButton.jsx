const MoreButton = ({ page, setPage }) => {
  return (
    <div style={{ marginTop: "2rem", textAlign: "center" }}>
      <button type="button" onClick={() => setPage((prePage) => prePage + 1)}>
        More
      </button>
    </div>
  );
};

export default MoreButton;
