import closeIcon from "../assets/close_icon.svg";

import { useGlobalContext } from "../context";

const CloseButton = () => {
  const { setIsSidebarOpen } = useGlobalContext();

  return (
    <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>
      <img src={closeIcon} alt="close icon" width="25" height="25" />
    </button>
  );
};

export default CloseButton;
