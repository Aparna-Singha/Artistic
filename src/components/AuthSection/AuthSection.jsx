import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import Tabs from "../Tabs/Tabs";

import "./AuthSection.css";

const AuthSection = () => {
  const [mode, setMode] = useState("Login");
  const tabs = {
    Login: <LoginForm />,
    Register: <RegisterForm />,
  }

  return (
    <div className="auth-section">
      <h1>
        Make art that colorizes the world,
        even if it itself is black and white.
      </h1>

      <div className="auth-box">
        <Tabs mode={mode} setMode={setMode} tabs={tabs} />
      </div>
    </div>
  );
}

export default AuthSection;