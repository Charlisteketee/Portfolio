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
    title: "PhotoLabs",
    description: `Welcome to PhotoLabs, a captivating single-page application (SPA) designed to immerse users in the world of photography. Built with React, PhotoLabs offers a sleek and intuitive interface that showcases stunning photographs from around the globe. Its primary focus is to provide users with a visually appealing and easy-to-navigate platform to discover and appreciate photography in its purest form.

    Key Features
    Photograph Gallery: Dive into a vast collection of high-quality images, carefully selected to inspire and delight users.
    Dark Mode: Enhance your browsing experience with a beautifully designed dark theme that reduces eye strain and adds a touch of sophistication.
    Like Feature: Engage with your favorite photos by liking them. Your interactions contribute to a vibrant community of photo enthusiasts.
    API Integration: PhotoLabs demonstrates the power of integrating external APIs, showcasing how to fetch and display dynamic content seamlessly.`,
    videoUrl: "/images/photolabs.mp4",
  },
  {
    title: "Jungle",
    description: `Welcome to Jungle, a meticulously crafted e-commerce application designed to serve as a practical learning tool for aspiring developers interested in mastering the intricacies of Ruby on Rails. Built with Rails 6.1, this mini e-commerce platform encapsulates essential concepts and best practices in web development, offering a hands-on approach to understanding how real-world applications are structured and operate.
    Stripe was utilized for secure payment processing to test the checkout process functionalities. Additionally, we utilized Cypress for test-driven development, emphasizing the importance of automated testing in software development.
    Dependencies
    Jungle relies on the following technologies:

    Ruby on Rails 6.1: The core framework powering the application.
    Bootstrap 5: For styling and layout.
    PostgreSQL 9.x: The database system used to store application data.
    Stripe: Handles payment processing securely.`,
    videoUrl: "/images/jungle-rails.mp4",
  },

  // {
  //   title: "",
  //   description: "",
  //   videoUrl: "",
  // }
];


const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleDescription = (index) => {
    setShowMore(!showMore);
  };

  return (
    <section className="projects">
      <h2>Take a look at my projects...</h2>
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
            <div>
              <p>See more of my work on my <a href="https://github.com/Charlisteketee" target="_blank" rel="noopener noreferrer" className="custom-link">GitHub</a></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;