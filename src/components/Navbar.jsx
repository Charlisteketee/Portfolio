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
            <h1>CHARLI STEKETEE</h1>
            {/* <h3>Full-Stack Web Developer</h3> */}
          </div>
        </div>
        
        <nav className="navbar-right">
          <Link to="/" className="custom-link">Home</Link>
          <Link to="/projects" className="custom-link">Projects</Link>
          <Link to="/about" className="custom-link">About</Link>
          <Link to="/contact" className="custom-link">Contact</Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;