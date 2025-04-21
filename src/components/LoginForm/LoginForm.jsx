import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../../api/auth";

import "./LoginForm.css";
import { useStorage } from "../../hooks/storage";

const LoginForm = () => {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { getStorage, setStorage } = useStorage();

  const handleLogin = async (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!password) {
      passwordRef.current.focus();
      passwordRef.current.required = true;
    }

    if (!username) {
      usernameRef.current.focus();
      usernameRef.current.required = true;
    }

    if (!username || !password) return;
    
    const { status, token } = await login(username, password);

    if (token) {
      setStorage("token", token);
      setStorage("username", username);
    }

    if (status === "success") {
      window.location.reload();
    } else {
      alert("Login failed");
    }
  }

  useEffect(() => {
    if (getStorage("token")) {
      navigate("/");
    }
  }, [getStorage, navigate]);

  return (
    <div className="login-form">
      <div className="form-groups">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            ref={usernameRef}
            type="text"
            id="username"
            name="username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            name="password"
          />
        </div>
      </div>

      <button onClick={handleLogin}>Login</button>
    </div>
  )
};

export default LoginForm;