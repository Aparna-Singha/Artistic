import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import BottomButton from "../BottomButton/BottomButton";
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <BottomButton/>
    </>
  );
}

export default Layout;
