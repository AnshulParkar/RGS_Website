import React, { useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Home from './Components/Home';
import Header from './Components/Header';
import OurServices from './Components/OurServices';
import Footer from './Components/footer';
import CallbackOverlay from './Components/overlay';
import Projects from './Components/Projects';
import DocumentCarousel from './Components/DocumentCarousel';
import ENQ from './Components/enq';

function App() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const footerRef = useRef(null);

  const handleEnquiryClick = () => {
    setIsOverlayOpen(true);
  };

  const handleContactUsClick = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CallbackOverlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />

                {/* Home Section */}
                <div id="home">
                  <Home onContactUsClick={handleContactUsClick} />
                </div>

                {/* Services Section */}
                <div id="services">
                  <OurServices />
                </div>

                {/* Projects Section */}
                <div id="projects">
                  <Projects />
                </div>

                {/* FAQs Section */}
                <div id="faqs">
                  <DocumentCarousel />
                </div>

                {/* Enquiry Section */}
                <div id="enquiry">
                  <ENQ onEnquiryClick={handleEnquiryClick} />
                </div>

                {/* Contact Section */}
                <div id="contact">
                  <Footer ref={footerRef} />
                </div>
              </>
            }
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
