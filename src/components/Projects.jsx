import React from "react";
import '../styling/Projects.css';

const projects = [
  {
    title: "Schmovies",
    description: "",
    videoUrl: "",
  },
  {
    title: "",
    description: "",
    videoUrl: "",
  },
  {
    title: "",
    description: "",
    videoUrl: "",
  },
  {
    title: "",
    description: "",
    videoUrl: "",
  }
];


const Projects = () => {
  return (
   <section className="projects">
    <h2>Projects</h2>
    <div className="projects-list">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <video controls className="project-video">
            <source src={project.videoUrl} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
   </section>
  );
};

export default Projects;