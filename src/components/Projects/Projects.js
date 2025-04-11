import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Dali - Customer Statement System',
      description: 'Architected and developed comprehensive forms solution including Customer Statement, Account Statement, and Invoice generation systems for a US-based implementation.',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['SAP ABAP', 'RAP', 'Custom API', 'Interface Views'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Custom Employee Master Data API',
      description: 'Engineered Custom Employee Master Data API with complete RAP implementation including Interface Views, Behavior Definitions, and Service Bindings.',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['SAP ABAP', 'RAP', 'API', 'HANA Cloud'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'GSMPL - Textile Industry Solution',
      description: 'Developed automated bank posting system using BAPI and created dynamic SmartForms for Performa Invoice generation handling complex pricing scenarios.',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['SAP ABAP', 'BAPI', 'SmartForms', 'Custom Tables'],
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="projects-content"
        >
          <h2>My Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Code
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;