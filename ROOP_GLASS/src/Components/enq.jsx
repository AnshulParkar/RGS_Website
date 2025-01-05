import React from 'react';
import './enq.css';

function Enq({ onEnquiryClick }) {
  return (
    <div className="enquiry">
      <div className="content">
        <h1 className="enq-title">Where Quality Meets Innovation</h1>
        <h2 className="enq-subtitle">Your Goals, Our Expertise</h2>
        <button className="enq-button" onClick={onEnquiryClick}>ENQUIRY NOW</button>
      </div>
    </div>
  );
}

export default Enq;