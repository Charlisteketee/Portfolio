import React from "react";
import '../styling/Navbar.css';

const Navbar = () => {
  return (
    <div>
      <header className="navbar">
        <div className="navbar-left">
          <img src="/images/Profile.jpg" alt="Profile" className="profile-img"></img>
          <h1>Charli Steketee</h1>
        </div>
        
        <nav className="navbar-right">
          <a href="#about">About  </a>
          <a href="#contact"> Contact</a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;