import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2><span className="va">VANI</span><span className="priya">PRIYA</span></h2>
            <p>SAP ABAP Developer</p>
          </div>
          
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="footer-social">
            <a href="https://github.com/vanirv" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.geeksforgeeks.org/user/vanipriyahit/" target="_blank" rel="noopener noreferrer" aria-label="GeeksforGeeks">
              <SiGeeksforgeeks />
            </a>
            <a href="https://leetcode.com/u/user5830RD/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <SiLeetcode />
            </a>
            <a href="mailto:vanipriya19.23@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-text">
            © {new Date().getFullYear()} Vani Priya. All rights reserved.
          </p>
          <p className="footer-heart">
            Made with <FaHeart className="heart-icon" /> in Kolkata
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 