import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import './DocumentCarousel.css';
import certificate1 from '../assets/certificates/certificate1.png';
import certificate2 from '../assets/certificates/certificate2.png';
import certificate3 from '../assets/certificates/certificate3.png';
import certificate4 from '../assets/certificates/certificate4.png';

const DocumentCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const documents = [
    {
      id: 1,
      title: 'Certificate1',
      image: certificate1,
      category: 'Certification',
      // description: 'International Quality Management System certification',
    },
    {
      id: 2,
      title: 'Certificate2',
      image: certificate2,
      category: 'License',
      // description: 'State-authorized business operations permit',
    },
    {
      id: 3,
      title: 'Certificate3',
      image: certificate3,
      category: 'Certification',
      // description: 'Workplace safety standards certification',
    },
    {
      id: 4,
      title: 'Certificate4',
      image: certificate4,
      category: 'Certification',
      // description: 'Workplace safety standards certification',
    },
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

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
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
            onClick={() => openModal(documents[getPrevIndex()].image)}
          />
        </div>

        <div className="slide-wrapper current">
          <img
            src={documents[currentIndex].image}
            alt={documents[currentIndex].title}
            className="slide-image"
            onClick={() => openModal(documents[currentIndex].image)}
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
            onClick={() => openModal(documents[getNextIndex()].image)}
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

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            <img src={modalImage} alt="Full view" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentCarousel;
