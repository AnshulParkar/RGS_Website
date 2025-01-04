import React, { useState } from 'react';
import './Projects.css';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import images
import img1 from '../assets/AmanoraMallPune.png';
import img2 from '../assets/IncomeTaxBuilding.png';
import img3 from '../assets/MagicSquareMalad.png';
import img4 from '../assets/MTDCkharghar.png';
import img5 from '../assets/NMMCAiroli.png';
import img6 from '../assets/NMMCcBD2.png';
import img7 from '../assets/NMMCVashi.png';
import img8 from '../assets/NMMCwarkariBhavanCbdBelapur.png';
import img9 from '../assets/TaniaHorizon.png';
import img10 from '../assets/TrupatiBalaji.png';
import img11 from '../assets/VVMC.png';
import img12 from '../assets/AJLprojectBandra.png';
import img13 from '../assets/SBChavanTrust.png';
import img14 from '../assets/SawantBunglow.png';
import img15 from '../assets/Pagoda.png';
import img16 from '../assets/Landmark.png';
import img17 from '../assets/TrueEarth.png';

const Projects = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    { id: 3, img: img3, title: 'Magic Square Malad', description: 'Project details here' },
    { id: 12, img: img12, title: 'AJL Project - Bandra', description: 'Project details here' },
    { id: 1, img: img1, title: 'Amanora Mall Pune', description: 'Project details here' },
    { id: 2, img: img2, title: 'Income Tax Building', description: 'Project details here' },
    { id: 9, img: img9, title: 'Tania Horizon', description: 'Project details here' },
    { id: 11, img: img11, title: 'VVMC', description: 'Project details here' },
    { id: 4, img: img4, title: 'MTDC Kharghar', description: 'Project details here' },
    { id: 8, img: img8, title: 'NMMC Warkari Bhavan CBD Belapur', description: 'Project details here' },
    // { id: 6, img: img6, title: 'NMMC CBD', description: 'Project details here' },
    { id: 7, img: img7, title: 'NMMC Vashi', description: 'Project details here' },
    { id: 5, img: img5, title: 'NMMC Airoli', description: 'Project details here' },
    { id: 10, img: img10, title: 'Trupati Balaji', description: 'Project details here' },
    { id: 13, img: img13, title: 'SB Chavan Memorial trust - Nanded', description: 'Project details here' },
    { id: 14, img: img14, title: 'Sawant Bunglow - Airoli', description: 'Project details here' },
    { id: 15, img: img15, title: 'Global Vipassana Pagoda', description: 'Project details here' },
    { id: 16, img: img16, title: 'Landmark - Borivali', description: 'Project details here' },  
    { id: 17, img: img17, title: 'TrueEarth - Vikhroli', description: 'Project details here' }
  ];

  const openModal = (index) => {
    setSelectedImg(projects[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImg(null);
  };

  const navigate = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % projects.length 
      : (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(newIndex);
    setSelectedImg(projects[newIndex]);
  };

  return (
    <div className="projects-container">
      <h2 className="projects-title">Our Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => openModal(index)}
          >
            <img src={project.img} alt={project.title} className="project-thumbnail" />
            <div className="project-overlay">
              <h3 className="project-name">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedImg && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              <X className="w-6 h-6" />
            </button>
            <button 
              className="nav-button prev" 
              onClick={() => navigate('prev')}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              className="nav-button next" 
              onClick={() => navigate('next')}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            <div className="modal-image-container">
              <img src={selectedImg.img} alt={selectedImg.title} className="modal-image" />
            </div>
            <div className="modal-details">
              <h3>{selectedImg.title}</h3>
              <p>{selectedImg.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;