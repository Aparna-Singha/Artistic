// components/Navbar.jsx
import { Link } from "react-router-dom";
import logo from "./artisticlogo.jpg";
function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#ffffff" }}>
      <div className="navbar-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="navbar-logo" style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "50px", marginRight: "1rem" }}
          />
        </div>
        <div className="navbar-links">
          <Link to="/" style={{ marginRight: "1rem" }}>
            Home
          </Link>
          <Link to="/about" style={{ marginRight: "1rem" }}>
            About
          </Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
