import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-content">
          <h2><span className="highlight">Professional</span> Experience</h2>
          <div className="experience-item">
            <div className="experience-header">
              <div className="company-info">
                <FaBriefcase className="icon" />
                <h3>PricewaterhouseCoopers Services LLP</h3>
              </div>
              <div className="role-info">
                <span className="role">Associate</span>
                <div className="meta-info">
                  <span className="duration"><FaCalendarAlt /> August 2023 – Present</span>
                  <span className="location"><FaMapMarkerAlt /> Kolkata, West Bengal</span>
                </div>
              </div>
            </div>
            <div className="experience-details">
              <ul>
                <li>Lead SAP ABAP Developer in Advisory Line of Services, specializing in complex implementation scenarios</li>
                <li>Developed and maintained critical SAP solutions using ABAP, RAP, and related technologies</li>
                <li>Demonstrated expertise in custom development, forms, and integration solutions</li>
                <li>Collaborated with cross-functional teams to deliver high-quality solutions within deadlines</li>
                <li>Expertise in SAP ABAP, RAP, Adobe Forms, SmartForms, BADI Implementation, ERP, SAP S/4Hana, SAP Cloud Platform</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 