import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './DocumentCarousel.css';

const DocumentCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const documents = [
    {
      id: 1,
      title: "ISO Certification",
      image: "/api/placeholder/1200/800",
      category: "Certification",
      description: "International Quality Management System certification"
    },
    {
      id: 2,
      title: "Business Operations License",
      image: "/api/placeholder/1200/800",
      category: "License",
      description: "State-authorized business operations permit"
    },
    {
      id: 3,
      title: "Safety Compliance",
      image: "/api/placeholder/1200/800",
      category: "Certification",
      description: "Workplace safety standards certification"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === documents.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? documents.length - 1 : prevIndex - 1
    );
  };

  const getPrevIndex = () => {
    return currentIndex === 0 ? documents.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === documents.length - 1 ? 0 : currentIndex + 1;
  };

  return (
    <div className="carousel-container">
      <h1 className="carousel-heading">Achievements & Certificates</h1>
      <div className="carousel-track">
        <div className="slide-wrapper prev">
          <img 
            src={documents[getPrevIndex()].image} 
            alt={documents[getPrevIndex()].title} 
            className="slide-image"
          />
        </div>

        <div className="slide-wrapper current">
          <img 
            src={documents[currentIndex].image} 
            alt={documents[currentIndex].title} 
            className="slide-image"
          />
          <div className="slide-content">
            <h3>{documents[currentIndex].title}</h3>
            <p>{documents[currentIndex].description}</p>
          </div>
        </div>

        <div className="slide-wrapper next">
          <img 
            src={documents[getNextIndex()].image} 
            alt={documents[getNextIndex()].title} 
            className="slide-image"
          />
        </div>
      </div>

      <button className="nav-button prev" onClick={prevSlide}>
        <ChevronLeft size={24} />
      </button>
      <button className="nav-button next" onClick={nextSlide}>
        <ChevronRight size={24} />
      </button>

      <div className="carousel-dots">
        {documents.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default DocumentCarousel;
