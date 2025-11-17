import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const n = useNavigate();

  function handlelogin(e) {
    e.preventDefault();

    // Email validation
    if (email !== "gptcvrm635@gmail.com") {
      setError("Invalid Email!");
      return;
    }

    // Password validation
    if (password !== "gptcvrm") {
      setError("Incorrect Password!");
      return;
    }

    // Clear errors and navigate
    setError("");
    n("/sel");
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Login</h2>

        <form onSubmit={handlelogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "❌" : "👁️"}
            </span>
          </div>

          {error && <p className="error-msg">{error}</p>}

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="forgot">Forgot password?</div>
      </div>
    </div>
  );
}

export default LoginPage;
