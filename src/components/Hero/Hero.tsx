import React from 'react';
import { Link } from 'react-scroll';
import profileImage from '../../imge/a.jpg.jpeg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title animate-fade-in animate-delay-1">
          VANI PRIYA<br />
          <span className="highlight">SAP ABAP DEVELOPER</span>
        </h1>
        <p className="hero-description animate-fade-in animate-delay-2">
          Lead SAP ABAP Developer specializing in complex implementation scenarios
        </p>
        <div className="cta-buttons animate-fade-in animate-delay-3">
          <Link to="contact" smooth={true} duration={500} className="btn primary-btn">
            CONTACT
          </Link>
          <Link to="skills" smooth={true} duration={500} className="btn secondary-btn">
            SKILLS
          </Link>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={profileImage} alt="Vani Priya" className="hero-image" />
        <div className="image-border"></div>
      </div>
      <div className="creative-element"></div>
    </section>
  );
};

export default Hero;