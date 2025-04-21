import AuthSection from "../../components/AuthSection/AuthSection";
import flowers from "../../assets/flowers.png";
import "./auth_page.css";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <div className="image-section">
        <img
          src={flowers}
          alt="Flowers, by Aparna Singha"
        />
      </div>
      <AuthSection />
    </div>
  );
}

export default AuthPage;