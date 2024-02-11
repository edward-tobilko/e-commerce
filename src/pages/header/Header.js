import { Sidebar } from "../../components";
import SidebarState from "../../contexts/SidebarContext";

const Header = () => {
  return (
    <SidebarState>
      <Sidebar />
    </SidebarState>
  );
};

export default Header;
