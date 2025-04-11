import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPencilRuler, FaDatabase } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'PRODUCT ENGINEERING',
      description: 'Product Development',
      icon: <FaCode />,
    },
    {
      number: '02',
      title: 'UI/UX STRATEGY',
      description: 'Brand Development',
      icon: <FaPencilRuler />,
    },
    {
      number: '03',
      title: 'BIG DATA & ANALYTICS',
      description: 'SQL Data Management',
      icon: <FaDatabase />,
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="service-number">{service.number}</div>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 