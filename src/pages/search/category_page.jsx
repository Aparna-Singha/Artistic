import { useParams } from "react-router-dom";
import "./category_page.css";

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <div className="category-search-page">
      <h2>
        <span>
          Searching by
        </span>
        <span>
          Categories ({category})
        </span>
        <span>
          will be
        </span>
      </h2>
      <h1>
        Coming Soon!
      </h1>
    </div>
  )
};

export default CategoryPage;
