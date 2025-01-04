import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Home from './Components/Home';
import './App.css';
import Header from './Components/Header';
import OurServices from './Components/OurServices';
import Footer from './Components/footer';
import CallbackOverlay from './Components/overlay';
import Projects from './Components/Projects';
import DocumentCarousel from './Components/DocumentCarousel';
import ENQ from './Components/enq';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={
            <>
              <CallbackOverlay />
              <div id="home">
                <Home />
              </div>
              <div id="services">
                <OurServices />
              </div>
              <div id="projects">
                <Projects />
              </div>
              <div id="faqs">
                <DocumentCarousel />
              </div>
              <div id="enquiry">
                <ENQ />
              </div>
              <div id="contact">
                <Footer />
              </div>
            </>
          } />
        </Routes>
      </Container>
    </>
  );
}

export default App;
