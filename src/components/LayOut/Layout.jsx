import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar"; // Adjust the path as necessary
import BottomButton from "../BottomButton/BottomButton";
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* this is where HomePage, About, etc. will render */}
      <BottomButton/>
    </>
  );
}

export default Layout;
