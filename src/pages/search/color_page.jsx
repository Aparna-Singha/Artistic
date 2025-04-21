import { useParams } from "react-router-dom";
import "./color_page.css";

const ColorPage = () => {
  const { color } = useParams();

  return (
    <div className="color-search-page">
      <h2>
        <span>
          Searching by
        </span>
        <span style={{ color: `#${color}` }}>
          Colors
        </span>
        <span>
          will be
        </span>
      </h2>
      <h1 style={{ color: `#${color}` }}>
        Coming Soon!
      </h1>
    </div>
  )
};

export default ColorPage;
