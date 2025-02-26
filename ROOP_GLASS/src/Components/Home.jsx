import React from 'react';
import heroImage from '../assets/hero.jpg';

function Home({ onContactUsClick }) {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 position-relative text-center text-white"
      style={{
        width: '100%',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for Darkening Background */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      ></div>

      {/* Centered Content */}
      <div className="position-relative z-2 px-3">
        <h1
          className="fw-bold text-uppercase"
          style={{
            fontSize: '3rem',
            fontFamily: "'Playfair Display', serif",
            textShadow: '2px 2px 10px rgba(0,0,0,0.8)',
          }}
        >
          Contractors and Engineers for Facade and Roofing Works
        </h1>
        <button
          className="btn btn-warning mt-3 px-4 py-2 fs-5 fw-bold"
          onClick={onContactUsClick}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Home;
