import React from "react";
// import { Image } from "react-bootstrap";
import bg from "../assets/hero.jpg";
function Enq({ onEnquiryClick }) {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center w-100"
      style={{
        backgroundImage: bg,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "270px",
        padding: "20px",
      }}
    >
      <div className="px-3">
        <h1 className="fw-bold" style={{ fontSize: "2rem", color: "#0b0a0a" }}>
          Where Quality Meets Innovation
        </h1>
        <h2 className="mt-2" style={{ fontSize: "1.5rem", color: "#0b0a0a" }}>
          Your Goals, Our Expertise
        </h2>
        <button
          className="btn fw-bold mt-3"
          style={{
            backgroundColor: "#0ed8d8",
            color: "#000000",
            padding: "10px 20px",
            fontSize: "1rem",
            borderRadius: "5px",
            transition: "all 0.3s ease",
            border: "none",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#00bcbc")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0ed8d8")}
          onClick={onEnquiryClick}
        >
          ENQUIRY NOW
        </button>
      </div>
    </div>
  );
}

export default Enq;
