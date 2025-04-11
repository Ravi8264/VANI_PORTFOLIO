import React from 'react';
import { FaCode, FaIndustry, FaArrowRight } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-content">
          <h2><span className="highlight">Featured</span> Projects</h2>
          <div className="projects-grid">
            <div className="project-item">
              <div className="project-header">
                <div className="project-title">
                  <FaCode className="icon" />
                  <h3>Dali</h3>
                </div>
                <span className="role">Technical Developer</span>
                <span className="type">US-based Implementation</span>
              </div>
              <ul className="project-details">
                <li>Architected and developed comprehensive forms solution including Customer Statement, Account Statement, and Invoice generation systems</li>
                <li>Engineered Custom Employee Master Data API with complete RAP implementation including Interface Views, Behavior Definitions, and Service Bindings</li>
                <li>Implemented complex business logic and custom field validations improving data accuracy by 40%</li>
                <li>Implemented SAP HANA Cloud services for high-performance data analytics, processing large number of datasets for real-time business intelligence</li>
              </ul>
            </div>
            <div className="project-item">
              <div className="project-header">
                <div className="project-title">
                  <FaIndustry className="icon" />
                  <h3>GSMPL</h3>
                </div>
                <span className="role">Technical Developer</span>
                <span className="type">Textile Industry Solution</span>
              </div>
              <ul className="project-details">
                <li>Developed automated bank posting system using BAPI, reducing manual entry time</li>
                <li>Created dynamic Smartforms for Performa Invoice generation handling complex pricing scenarios</li>
                <li>Designed and implemented custom tables and data structures for efficient business process mapping</li>
                <li>Optimized existing reports resulting in 30% improvement in performance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 