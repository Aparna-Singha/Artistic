import AuthSection from "../../components/AuthSection/AuthSection";
import flowers from "../../assets/flowers.png";
import "./auth_page.css";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <div className="image-section">
        <div className="image-box">
          <img
            src={flowers}
            alt="Flowers, by Aparna Singha"
          />
        </div>
      </div>
      <AuthSection />
    </div>
  );
}

export default AuthPage;