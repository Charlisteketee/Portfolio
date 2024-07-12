import React from "react";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import '../styling/Home.css';

const Home = () => {
  return (
    <div className="home-page">
    <div className="h1">
      <h1>Hi!</h1>
      <h1>I'm Charli,</h1>
      <h1>web developer</h1>
    </div>
      <div className="project-link">
        <p>Take a look at my projects...</p>
        <Link to="/projects" className="project-btn">Projects</Link>
      </div>
    </div>
  );
};

export default Home;