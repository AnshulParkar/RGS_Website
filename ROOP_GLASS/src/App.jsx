import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import Home from './Components/Home';
import './App.css';
import Header from './Components/Header';
import OurServices from './Components/OurServices'; // Corrected import
import Footer from './Components/footer'; // Corrected import
import CallbackOverlay from './Components/overlay';
import Projects from './Components/Projects';
import DocumentCarousel from './Components/DocumentCarousel';
import ENQ  from './Components/enq'; // Corrected import

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={
            <>
              <CallbackOverlay />
              <Home />
              <OurServices /> {/* Corrected component name */}
              <Projects/>
              <DocumentCarousel/>
              <ENQ /> {/* Corrected component name */}
              <Footer /> {/* Corrected component name */}
            </>
          } />
        </Routes>
      </Container>
    </>
  );
}

export default App;