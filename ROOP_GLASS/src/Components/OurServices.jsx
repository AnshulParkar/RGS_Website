import React from 'react';
import { Typography, Grid as MuiGrid, Container } from '@mui/material';
import AluminiumCladding from '../assets/Aluminium_Cladding.png';
import CurtainWall from '../assets/CurtainWall.png';
import DryStone from '../assets/DryStone_Cladding.png';
import FramelessGlazing from '../assets/Frameless_Glazing.png';
import GlassRoofing from '../assets/Glass_Roofing.png';
import MetalRoofing from '../assets/Metal_Roofing.png';
import MSSSFrameWorks from '../assets/MS&SSframeWorks.png';
import PolycarbonateRoofing from '../assets/Polycarbonate_Roofing.png';
import StructuralGlazing from '../assets/Structural_Glazing.png';

const serviceData = [
  { image: StructuralGlazing, title: 'Structural Glazing', description: 'Advanced structural glazing for modern projects' },
  { image: AluminiumCladding, title: 'Aluminium Cladding', description: 'Premium aluminum cladding for architectural designs' },
  { image: FramelessGlazing, title: 'Frameless Glazing', description: 'Sleek frameless glazing systems for contemporary spaces' },
  { image: PolycarbonateRoofing, title: 'Polycarbonate Roofing', description: 'Lightweight and versatile roofing systems' },
  { image: GlassRoofing, title: 'Glass Roofing', description: 'Innovative glass roofing solutions for natural lighting' },
  { image: MetalRoofing, title: 'Metal Roofing', description: 'Durable and aesthetic metal roofing systems' },
  { image: DryStone, title: 'Dry Stone Cladding', description: 'Natural stone cladding for durable facades' },
  { image: MSSSFrameWorks, title: 'MS & SS Frame Works', description: 'Custom mild steel and stainless steel frameworks' },
  { image: CurtainWall, title: 'Curtain Wall System', description: 'Elegant curtain wall systems for buildings' }
];

const OurServices = () => {
  return (
    <div className="py-5 bg-light">
      <Container maxWidth="xl" className="text-center">
        <Typography 
          variant="h2" 
          component="h2" 
          className="fw-bold mb-4 text-dark"
          style={{ fontFamily: '"Playfair Display", serif', fontSize: '2.5rem' }}
        >
          Our Services
        </Typography>
        
        {/* Service Grid */}
        <MuiGrid container spacing={4} className="justify-content-center">
          {serviceData.map((service, index) => (
            <MuiGrid item xs={12} sm={6} md={4} key={index}>
              <div className="d-flex flex-column align-items-center text-center p-3 border rounded shadow-sm bg-white h-100">
                <div className="w-100 d-flex justify-content-center mb-3">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="img-fluid rounded border"
                    style={{ maxWidth: '250px', height: 'auto' }}
                  />
                </div>
                <Typography 
                  variant="h6" 
                  className="fw-semibold text-dark"
                  style={{ fontSize: '1.2rem' }}
                >
                  {service.title}
                </Typography>
              </div>
            </MuiGrid>
          ))}
        </MuiGrid>

        {/* Bottom Text */}
        <h2 className="mt-5 text-dark fw-bold">
          We provide Both Unitized and Semi-Unitized Systems
        </h2>
      </Container>
    </div>
  );
};

export default OurServices;
