import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const education = [
    {
      school: 'Haldia Institute of Technology',
      degree: 'Bachelor of Technology in Electronics and Communication Engineering',
      duration: 'Aug 2019 - Jul 2023',
      location: 'Haldia, WB',
      gpa: '9.1',
      icon: <FaGraduationCap />
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="education-content">
          <h2>Education</h2>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-box">
                <div className="education-icon">{edu.icon}</div>
                <h3>{edu.school}</h3>
                <div className="education-details">
                  <p className="degree">{edu.degree}</p>
                  <div className="education-info">
                    <span className="duration"><FaCalendarAlt /> {edu.duration}</span>
                    <span className="location"><FaMapMarkerAlt /> {edu.location}</span>
                  </div>
                  <div className="gpa"><FaStar /> GPA: {edu.gpa}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 