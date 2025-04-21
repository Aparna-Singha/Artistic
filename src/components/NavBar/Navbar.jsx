import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/logo.jpg";
import "./Navbar.css";

function Navbar() {
  const categories = [
	  { name: "Sketches", path: "sketch" },
	  { name: "Perspectives", path: "perspective" },
    { name: "Portraits", path: "portrait" },
	  { name: "Comic", path: "comic" },
	  { name: "Doodles", path: "doodle" },
  ];

  const colors = [
    { name: "Crimson", hex: "DC143C" },
    { name: "Amber", hex: "FFBF00" },
    { name: "Emerald", hex: "50C878" },
    { name: "Cerulean", hex: "007BA7" },
    { name: "Royal Purple", hex: "7851A9" },
    { name: "Coral", hex: "FF6F61" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-categories">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/categories/${category.path}`}
              className="navbar-category"
            >
              {category.name}
            </Link>
          ))}
        </div>
        <div className="navbar-user-actions">
          <Link to="/me/likes">
            <FontAwesomeIcon
              className="navbar-user-action"
              icon={faHeart}
            />
          </Link>
          <Link to="/me/saves">
            <FontAwesomeIcon
              className="navbar-user-action"
              icon={faBookmark}
            />
          </Link>
          <Link to="/me/profile">
            <FontAwesomeIcon
              className="navbar-user-action"
              icon={faUser}
            />
          </Link>
        </div>
        <div className="navbar-colors">
          {colors.map((color, index) => (
            <Link
              key={index}
              to={`/colors/${color.hex}`}
              className="navbar-color"
            >
              <span
                className="color-fill"
                style={{ backgroundColor: `#${color.hex}` }}
              ></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
