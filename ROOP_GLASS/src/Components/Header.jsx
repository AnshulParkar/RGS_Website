import React, { useState } from 'react';
import './Header.css'; // Import CSS for styling
import logo from '../assets/logo.png'; // Import the logo image

const Header = () => {
  const [activeLink, setActiveLink] = useState('home'); // State to track active link

  const reloadPage = () => {
    window.location.reload(); // Reloads the page when the logo is clicked
  };

  const handleScroll = (sectionId) => {
    setActiveLink(sectionId); // Update the active link
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <div className="logo" onClick={reloadPage} style={{ cursor: 'pointer' }}>
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="Cname">
        <h1>Roop Glass Solutions</h1>
      </div>
      <nav className="nav-links">
        <ul>
          <li className={activeLink === 'home' ? 'active' : ''}>
            <a onClick={() => handleScroll('home')} href="#home">Home</a>
          </li>
          <li className={activeLink === 'services' ? 'active' : ''}>
            <a onClick={() => handleScroll('services')} href="#services">Our Services</a>
          </li>
          <li className={activeLink === 'projects' ? 'active' : ''}>
            <a onClick={() => handleScroll('projects')} href="#projects">Projects</a>
          </li>
          <li className={activeLink === 'faqs' ? 'active' : ''}>
            <a onClick={() => handleScroll('faqs')} href="#faqs">Certificates</a>
          </li>
          <li className={activeLink === 'enquiry' ? 'active' : ''}>
            <a onClick={() => handleScroll('enquiry')} href="#enquiry">Enquiry</a>
          </li>
          <li className={activeLink === 'contact' ? 'active' : ''}>
            <a onClick={() => handleScroll('contact')} href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
