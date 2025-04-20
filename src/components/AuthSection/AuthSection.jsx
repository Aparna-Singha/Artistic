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
      <div className="auth-box">
        <Tabs mode={mode} setMode={setMode} tabs={tabs} />
      </div>
    </div>
  );
}

export default AuthSection;