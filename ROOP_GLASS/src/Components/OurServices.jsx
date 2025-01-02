import React from 'react';
import { Typography, Grid as MuiGrid, Container } from '@mui/material';
import './OurServices.css';
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
  {
    image: StructuralGlazing,
    title: 'Structural Glazing',
    description: 'Advanced structural glazing for modern architectural projects'
  },
  {
    image: AluminiumCladding,
    title: 'Aluminium Cladding',
    description: 'Premium aluminum cladding solutions for modern architectural designs'
  },
  {
    image: FramelessGlazing,
    title: 'Frameless Glazing',
    description: 'Sleek frameless glazing systems for contemporary spaces'
  },
  {
    image: PolycarbonateRoofing,
    title: 'Polycarbonate Roofing',
    description: 'Lightweight and versatile polycarbonate roofing systems'
  },
  {
    image: GlassRoofing,
    title: 'Glass Roofing',
    description: 'Innovative glass roofing solutions for natural lighting'
  },
  {
    image: MetalRoofing,
    title: 'Metal Roofing',
    description: 'Durable and aesthetic metal roofing systems'
  },
  {
    image: DryStone,
    title: 'Dry Stone Cladding',
    description: 'Natural stone cladding solutions for authentic and durable facades'
  },
  {
    image: MSSSFrameWorks,
    title: 'MS & SS Frame Works',
    description: 'Custom mild steel and stainless steel framework solutions'
  },
  {
    image: CurtainWall,
    title: 'Curtain Wall System',
    description: 'Elegant curtain wall systems for commercial and residential buildings'
  }
];

const OurServices = () => {
  return (
    <div className="services-section">
      <Container maxWidth="xl">
        <Typography 
          variant="h2" 
          component="h2" 
          className="services-title"
          sx={{ fontFamily: '"Playfair Display", serif' }}
        >
          Our Services
        </Typography>
        <MuiGrid container spacing={8}>
          {serviceData.map((service, index) => (
            <MuiGrid item xs={12} sm={6} md={4} key={index}>
              <div className="service-box">
                <div className="image-container">
                  <img src={service.image} alt={service.title} className="service-image" />
                </div>
                <Typography 
                  variant="h6" 
                  component="h3" 
                  align="center" 
                  className="service-title"
                >
                  {service.title}
                </Typography>
              </div>
            </MuiGrid>
          ))}
        </MuiGrid>
      </Container>
    </div>
  );
};

export default OurServices;