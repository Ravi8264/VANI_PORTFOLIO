import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2>About Me</h2>
          <div className="about-text">
            <p>
              I am a passionate SAP ABAP Developer with a strong foundation in enterprise solutions
              and a keen eye for creating efficient, scalable applications. With expertise
              in SAP technologies, I strive to build robust solutions that drive business value.
            </p>
            <p>
              Currently working as an Associate at PricewaterhouseCoopers Services LLP in Kolkata,
              I lead SAP ABAP development in the Advisory Line of Services, specializing in complex
              implementation scenarios. My journey in SAP development started with a curiosity about
              how enterprise systems work, which led me to dive deep into various SAP technologies.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h3>1+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>3+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Problems Solved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 