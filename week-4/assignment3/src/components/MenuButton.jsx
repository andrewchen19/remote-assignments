import menuIcon from "../assets/menu_icon.svg";

import { useGlobalContext } from "../context";

const MenuButton = () => {
  const { setIsSidebarOpen } = useGlobalContext();

  return (
    <div className="menu-btn-container">
      <button className="menu-btn" onClick={() => setIsSidebarOpen(true)}>
        <img src={menuIcon} alt="menu icon" width="25" height="25" />
      </button>
    </div>
  );
};

export default MenuButton;
