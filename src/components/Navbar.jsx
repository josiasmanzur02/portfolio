import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTools, faCode, faPhone, faTrophy } from '@fortawesome/free-solid-svg-icons';
import '../css/Navbar.css';

const Navbar = () => {  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <ul>
          <li>
            {scrolled ? <a href="#header"><FontAwesomeIcon icon={faHome} /></a> : <a href="#header">Home</a>}
          </li>
          <li>
            {scrolled ? <a href="#projects"><FontAwesomeIcon icon={faCode} /></a> : <a href="#projects">Projects</a>}
          </li>
          <li>
            {scrolled ? <a href="#experience"><FontAwesomeIcon icon={faTrophy} /></a> : <a href="#experience">Experience</a>}
          </li>
          <li>
            {scrolled ? <a href="#skills"><FontAwesomeIcon icon={faTools} /></a> : <a href="#skills">Skills</a>}
          </li>
          <li>
            {scrolled ? <a href="tel:6116846"><FontAwesomeIcon icon={faPhone} /></a> : <a href="tel:6116846">Contact</a>}
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
