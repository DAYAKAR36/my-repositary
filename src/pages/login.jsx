import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

 function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const n=useNavigate();
  function handlelogin(e)
  {
    e.preventDefault();
  n('/sel')
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Login</h2>

        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
            />
            <span
              className="toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "❌" : "👁️"}
            </span>
          </div>

          <button type="submit" className="login-btn" onClick={handlelogin}>
            Login
          </button>
        </form>

        <div className="forgot">Forgot password?</div>
      </div>
    </div>
  );
}
export default LoginPage;