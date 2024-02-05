import { useGlobalContext } from "../context";

const ActionButton = () => {
  const { isBoxesHide, setIsBoxesHide } = useGlobalContext();

  return (
    <div className="action-btn-container">
      <button
        className="action-btn"
        onClick={() => setIsBoxesHide(!isBoxesHide)}
      >
        {isBoxesHide ? "show rest boxes" : "hide rest boxes"}
      </button>
    </div>
  );
};

export default ActionButton;
