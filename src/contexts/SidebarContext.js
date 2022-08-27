import { createContext, useState } from "react";

export const SidebarContext = createContext({
  isOpenSidebar: true,
  toggleMenu: () => {},
});

const SidebarState = ({ children }) => {
  const [isOpenSidebar, toggleMenu] = useState(false);

  // Open or close sidebar for click burger
  function toggleMenuMode() {
    toggleMenu(!isOpenSidebar);
  }

  return (
    <SidebarContext.Provider
      value={{
        isOpenSidebar,
        toggleMenuMode,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarState;
