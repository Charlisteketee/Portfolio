import React from "react";
import '../styling/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h3>Contact me!</h3>
      <p>Message me on <a href="https://discordapp.com/users/charli_59682" target="_blank" rel="noopener noreferrer" className="custom-link">Discord</a></p>
      <p>
        Or <a href="https://www.linkedin.com/in/charli-steketee/" target="_blank" rel="noopener noreferrer" className="custom-link">LinkedIn</a>
      </p>
      <p>
        And visit My <a href="https://github.com/Charlisteketee" target="_blank" rel="noopener noreferrer" className="custom-link">GitHub</a>
      </p>   
    </div>
  );
};

export default Contact;