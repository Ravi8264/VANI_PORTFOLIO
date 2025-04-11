import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="resume-content"
        >
          <h2>Resume</h2>
          <p>Download my resume to learn more about my experience and skills.</p>
          <div className="resume-details">
            <div className="resume-item">
              <h3>Experience</h3>
              <p>PricewaterhouseCoopers Services LLP | Associate</p>
              <p>August 2023 – Present | Kolkata, West Bengal</p>
            </div>
            <div className="resume-item">
              <h3>Education</h3>
              <p>Haldia Institute of Technology</p>
              <p>Bachelor of Technology in Electronics and Communication Engineering</p>
              <p>Aug 2019 - Jul 2023 | Haldia, WB | GPA: 9.1</p>
            </div>
          </div>
          <a href="/resume.pdf" className="download-btn" download>
            <FaDownload /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 