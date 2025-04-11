import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { to: 'home', label: 'HOME' },
    { to: 'experience', label: 'EXPERIENCE' },
    { to: 'projects', label: 'PROJECTS' },
    { to: 'skills', label: 'SKILLS' },
    { to: 'education', label: 'EDUCATION' },
    { to: 'contact', label: 'CONTACT' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <Link to="home" smooth={true} duration={500}>
            <span className="va">VA</span><span className="ni">NI</span>
          </Link>
        </div>
        
        <button className="menu-button" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;