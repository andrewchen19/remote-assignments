import CloseButton from "./CloseButton";
import Nav from "./Nav";

import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext();

  return (
    <aside className={`sidebar ${isSidebarOpen && "show-sidebar"}`}>
      <div className="sidebar-container">
        <CloseButton />
        <Nav />
      </div>
    </aside>
  );
};

export default Sidebar;
