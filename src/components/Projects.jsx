import React, { useState } from "react";
import '../styling/Projects.css';

const projects = [
  {
    title: "Schmovies",
    description: `An innovative app designed to enhance your movie-watching experience. Upon landing on the homepage, users are greeted with the latest movie releases, curated with OpenAI to keep enthusiasts updated with the latest movies. The heart of Schmovies lies in its unique feature - a personalized movie recommendation quiz powered by AI. By answering a series of questions about your preferences, Schmovies crafts a list of recommended movies tailored just for you.
    For authorized users who have found their next watch, MovieFinder offers a dedicated space to save your favorite movies.

    Built with a modern tech stack, MovieFinder leverages the power of ReactJS for its dynamic frontend, delivering a smooth and responsive user interface. The backend is powered by Django, a high-level Python web framework, which efficiently handles requests and manages data flow between the client and the server. To store and manage all the cinematic data, MovieFinder utilizes PostgreSQL, a powerful, open-source object-relational database system.`,
    videoUrl: "/images/schmovies.mp4",
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
  const [showMore, setShowMore] = useState(false);

  const toggleDescription = (index) => {
    setShowMore(!showMore);
  };

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p onClick={() => toggleDescription(index)} className={`project-description ${showMore ? 'show-more' : ''}`}>
              {project.description.split('\n').slice(0, 5).join('\n')} {/* Show only the first few lines */}
            </p>
            <button onClick={() => toggleDescription(index)}>
              {showMore ? 'Show Less' : 'Read More'}
            </button>
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