import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { register } from "../../api/auth";

import "./RegisterForm.css";
import { useStorage } from "../../hooks/storage";

const RegisterForm = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { getStorage, setStorage } = useStorage();

  const handleRegister = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (!email) {
      emailRef.current.focus();
      emailRef.current.required = true;
      return;
    }

    if (!username) {
      usernameRef.current.focus();
      usernameRef.current.required = true;
      return;
    }

    if (!password) {
      passwordRef.current.focus();
      passwordRef.current.required = true;
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      confirmPasswordRef.current.focus();
      return;
    }

    const {
      status,
      token,
    } = await register(email, username, password);

    if (token) {
      setStorage("token", token);
      setStorage("username", username);
    }

    if (status === "success") {
      window.location.reload();
    } else {
      alert("Registration failed");
    }
  };

  useEffect(() => {
    if (getStorage("token")) {
      navigate("/");
    }
  }, [getStorage, navigate]);

  return (
    <div className="login-form">
      <div className="form-groups">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            name="email"
          />
        </div>

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

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            ref={confirmPasswordRef}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
          />
        </div>
      </div>

      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterForm;