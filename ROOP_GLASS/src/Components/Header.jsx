import React from 'react';
import './Header.css'; // Import CSS for styling
import logo from '../assets/logo.png'; // Import the logo image
const Header = () => {
  const reloadPage = () => {
    window.location.reload(); // Reloads the page when the logo is clicked
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
          <li className="active">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Our Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#faqs">Certificates</a>
          </li>
          <li>
            <a href="#Enquiry">Enquiry</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
