import AuthSection from "../../components/AuthSection/AuthSection";
import "./auth_page.css";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <div className="image-section">
        <img
          src="https://picsum.photos/720/1080"
          alt="Random Image - Lorem Picsum"
        />
      </div>
      <AuthSection />
    </div>
  );
}

export default AuthPage;