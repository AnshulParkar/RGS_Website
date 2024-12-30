import React from 'react';
import './Services.css';

const services = [
  { title: "Structural Glazing", img: "structural-glazing.jpg" },
  { title: "Aluminium Cladding", img: "aluminium-cladding.jpg" },
  { title: "Frameless Glazing", img: "frameless-glazing.jpg" },
  { title: "Polycarbonate Roofing", img: "polycarbonate-roofing.jpg" },
  { title: "Glass Roofing", img: "glass-roofing.jpg" },
  { title: "Metal Roofing", img: "metal-roofing.jpg" },
];

const Services = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={service.img} className="card-img-top" alt={service.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{service.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
