import React from "react";
import { Link } from "react-router-dom";
import '../styling/Navbar.css';

const Navbar = () => {
  return (
    <div>
      <header className="navbar">
        <div className="navbar-left">
          <img src="/images/Profile.jpg" alt="Profile" className="profile-img"></img>
          <div className="titles">
            <h1>Charli Steketee</h1>
            <h3>Full-Stack Web Developer</h3>
          </div>
        </div>
        
        <nav className="navbar-right">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;