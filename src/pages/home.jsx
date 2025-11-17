import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const n = useNavigate();

  function handleAbout(e) {
    e.preventDefault();
    n("/about");
  }
  function handletologin(e) {
    e.preventDefault();
    n("/login");
  }

  function handleAdmissionRegister(e) {
    e.preventDefault();
    n("/admission");
  }

  return (
    <div className="homepage">
      <div className="overlay">
        <h1>Welcome to Government Polytechnic Chodavaram</h1>
        <p>Your Gateway to Excellence in Technical Education</p>

        <div className="buttons">
          <button className="about-btn" onClick={handleAbout} >About</button>

          <button className="login-btn" onClick={handletologin}>
            Login
          </button>

          <button className="admission-btn" onClick={handleAdmissionRegister}>
            Admission Register
          </button>
          <button className="admin" onClick={() => n("/admin")}>
            Student Admin
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
