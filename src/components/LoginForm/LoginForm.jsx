import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="login-form">
      <div className="form-groups">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
      </div>

      <button type="submit">Login</button>
    </div>
  )
};

export default LoginForm;