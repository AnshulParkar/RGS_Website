import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Import the logo image
import { FaTimes, FaBars } from 'react-icons/fa'; // Import icons from react-icons

const Header = () => {
  const [activeLink, setActiveLink] = useState('home'); // State to track active link
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu open/close

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
  };

  return (
    <header
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-3"
      style={{ backdropFilter: 'blur(10px)', zIndex: 1000 }}
    >
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Logo Section */}
        <div
          onClick={reloadPage}
          style={{ cursor: 'pointer' }}
          className="d-flex align-items-center"
        >
          <img
            src={logo}
            alt="Logo"
            style={{ height: '70px', width: 'auto' }}
            className="img-fluid"
          />
        </div>

        {/* Company Name - Always Visible */}
        <h1 className="text-white fw-bold fs-5 m-0 text-center flex-grow-1">
          Roop Glass Solutions
        </h1>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler border-0 text-warning"
          type="button"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Menu */}
        <div
          className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`}
        >
          <ul className="navbar-nav gap-3">
            {[
              { id: 'home', label: 'Home' },
              { id: 'services', label: 'Our Services' },
              { id: 'projects', label: 'Projects' },
              { id: 'faqs', label: 'Certificates' },
              { id: 'enquiry', label: 'Enquiry' },
              { id: 'contact', label: 'Contact Us' },
            ].map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  onClick={() => handleScroll(item.id)}
                  href={`#${item.id}`}
                  className={`nav-link text-uppercase fw-medium ${
                    activeLink === item.id ? 'active border border-warning px-3 rounded' : 'text-warning'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
