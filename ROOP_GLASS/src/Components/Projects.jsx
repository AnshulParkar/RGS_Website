import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images
import img1 from '../assets/AmanoraMallPune.png';
import img2 from '../assets/IncomeTaxBuilding.png';
import img3 from '../assets/MagicSquareMalad.png';
import img4 from '../assets/MTDCkharghar.png';
import img5 from '../assets/NMMCAiroli.png';
import img7 from '../assets/NMMCVashi.png';
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

  const closeModal = () => setSelectedImg(null);

  const navigate = (direction) => {
    const newIndex = direction === 'next' ? (currentIndex + 1) % projects.length : (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(newIndex);
    setSelectedImg(projects[newIndex]);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Our Projects</h1>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div key={project.id} className="col-md-4" onClick={() => openModal(index)}>
            <div className="card shadow-sm border-0 overflow-hidden">
              <img src={project.img} alt={project.title} className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
              <div className="card-body text-center bg-dark text-light">
                <h5 className="card-title mb-0">{project.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImg && (
        <div className="modal d-flex align-items-center justify-content-center show" style={{ backgroundColor: 'rgba(0,0,0,0.8)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1050 }} onClick={closeModal}>
          <div className="modal-dialog modal-lg" onClick={e => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header bg-dark text-light">
                <h5 className="modal-title">{selectedImg.title}</h5>
                <button className="btn-close btn-close-white" onClick={closeModal}></button>
              </div>
              <div className="modal-body text-center">
                <img src={selectedImg.img} alt={selectedImg.title} className="img-fluid" />
                <p className="mt-3">{selectedImg.description}</p>
              </div>
              <div className="modal-footer justify-content-between">
                <button className="btn btn-outline-dark" onClick={() => navigate('prev')}><ChevronLeft /></button>
                <button className="btn btn-outline-dark" onClick={() => navigate('next')}><ChevronRight /></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
