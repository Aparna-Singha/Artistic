import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar"; // Adjust the path as necessary
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* this is where HomePage, About, etc. will render */}
    </>
  );
}

export default Layout;
