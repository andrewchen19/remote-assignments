import { createContext, useContext, useState } from "react";

const globalContext = createContext();

// export custom hook
export const useGlobalContext = () => useContext(globalContext);

const AppProvider = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isBoxesHide, setIsBoxesHide] = useState(false);

  return (
    <globalContext.Provider
      value={{ isSidebarOpen, setIsSidebarOpen, isBoxesHide, setIsBoxesHide }}
    >
      {props.children}
    </globalContext.Provider>
  );
};

export default AppProvider;
