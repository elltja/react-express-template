import Topnav from "../components/global/Topnav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  
    return (
      <>
        <Topnav />
        <Outlet />
      </>
    );
};
  
export default MainLayout;
