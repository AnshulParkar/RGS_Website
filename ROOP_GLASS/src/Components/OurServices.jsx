import React from 'react';
import { Typography, Grid as MuiGrid, Container } from '@mui/material';
import './OurServices.css';

const serviceData = [
  { image: 'path/to/image1.jpg', title: 'Web Development', description: 'Custom website solutions for your business' },
  { image: 'path/to/image2.jpg', title: 'Mobile Apps', description: 'Native and cross-platform mobile applications' },
  { image: 'path/to/image3.jpg', title: 'Cloud Services', description: 'Scalable cloud infrastructure solutions' },
  { image: 'path/to/image4.jpg', title: 'UI/UX Design', description: 'User-centered design and interfaces' },
  { image: 'path/to/image5.jpg', title: 'Consulting', description: 'Technical consulting and strategy' },
  { image: 'path/to/image6.jpg', title: 'Support', description: '24/7 technical support and maintenance' },
  { image: 'path/to/image7.jpg', title: 'SEO Optimization', description: 'Improve your site’s visibility and ranking' },
  { image: 'path/to/image8.jpg', title: 'E-commerce Solutions', description: 'Create and manage online stores' },
  { image: 'path/to/image9.jpg', title: 'Digital Marketing', description: 'Increase your reach and brand awareness' },
];

const OurServices = () => {
  return (
    <div className="services-section">
      <Container>
        <Typography variant="h2" component="h2" className="services-title">
          Our Services
        </Typography>
        <MuiGrid container spacing={4}>
          {serviceData.map((service, index) => (
            <MuiGrid item xs={12} sm={6} md={4} key={index}>
              <div className="service-box">
                <img src={service.image} alt={service.title} className="service-image" />
                <Typography variant="h5" component="h3" className="service-title">
                  {service.title}
                </Typography>
                <Typography variant="body1" className="service-description">
                  {service.description}
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
