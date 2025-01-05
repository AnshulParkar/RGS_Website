import React from 'react';
import './Home.css';

function Home({ onContactUsClick }) {
  return (
    <>
      <div className="hero-banner">
        <div className="hero-overlay">
          <h1 className="hero-title">Contractors and Engineers for Facade and Roofing Works</h1>
          <button className="cta-button" onClick={onContactUsClick}>Contact Us</button>
        </div>
      </div>
    </>
  );
}

export default Home;