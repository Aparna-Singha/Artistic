import "./RegisterForm.css";

const RegisterForm = () => {
  return (
    <div className="register-form">
      <div className="form-groups">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" id="confirm" name="confirm" required />
        </div>
      </div>

      <button type="submit">Register</button>
    </div>
  )
};

export default RegisterForm;