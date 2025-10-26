import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css"; 

function HomePage() {
  const n = useNavigate();

  function handletologin(e) {
    e.preventDefault();
    n('/login');
  }

  function handleAdmissionRegister(e) {
    e.preventDefault();
    n('/admission'); // your AdmissionRegister route
  }

  return (
    <div className="homepage">
      <div className="overlay">
        <h1>Welcome to Government Polytechnic Chodavaram</h1>
        <p>Your Gateway to Excellence in Technical Education</p>
        <div className="buttons">
          <button className="about-btn">About</button>
          <button className="login-btn" onClick={handletologin}>Login</button>
          {/* New button for Admission Register */}
          <button className="admission-btn" onClick={handleAdmissionRegister}>
            Admission Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
