import React from 'react';
import { FaCode, FaDatabase, FaServer, FaGit, FaJava, FaHtml5, FaCss3Alt, FaJs, FaSitemap, FaFileAlt, FaChartBar, FaCloud } from 'react-icons/fa';
import { SiSap } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'SAP ABAP', icon: <SiSap /> },
    { name: 'SAP RAP', icon: <SiSap /> },
    { name: 'Adobe Forms', icon: <FaFileAlt /> },
    { name: 'Smart Forms', icon: <FaFileAlt /> },
    { name: 'BADI', icon: <SiSap /> },
    { name: 'CDS Views', icon: <SiSap /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'MySQL', icon: <FaDatabase /> },
    { name: 'Git', icon: <FaGit /> },
    { name: 'BAPI', icon: <FaServer /> },
    { name: 'ALV Reports', icon: <FaChartBar /> },
    { name: 'SAP S/4HANA', icon: <SiSap /> },
    { name: 'SAP Cloud Platform', icon: <FaCloud /> }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-content">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-box"
              >
                <div className="skill-icon">{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;