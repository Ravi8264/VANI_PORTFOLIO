import React, { useState, useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', // Added subject field
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS send form with your credentials
    emailjs.sendForm(
      'service_mcwjn5i', 
      'template_27ibeln', 
      form.current, 
      '1UqpjBCIG9aBo3s-a'
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setIsSubmitting(false);
        setSubmitStatus({
          success: true,
          message: 'Your message has been sent successfully!'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }, (error) => {
        console.error('Failed to send email:', error.text);
        setIsSubmitting(false);
        setSubmitStatus({
          success: false,
          message: 'Failed to send message. Please try again later.'
        });
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <div className="intro-section">
            <h1><span className="va">VANI </span><span className="priya">PRIYA </span>SAP ABAP Developer</h1>
            <p>Lead SAP ABAP Developer specializing in complex implementation scenarios</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope />
                <div>
                  <h3>Email</h3>
                  <p>vanipriya19.23@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone />
                <div>
                  <h3>Phone</h3>
                  <p>+91 XXXXXXXXXX</p>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <div>
                  <h3>Location</h3>
                  <p>Kolkata, West Bengal</p>
                </div>
              </div>
            </div>
            <form className="contact-form" ref={form} onSubmit={handleSubmit}>
              {submitStatus && (
                <div className={`submit-status ${submitStatus.success ? 'success' : 'error'}`}>
                  {submitStatus.message}
                </div>
              )}
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;