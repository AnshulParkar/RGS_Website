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
              <Footer /> {/* Corrected component name */}
            </>
          } />
        </Routes>
      </Container>
    </>
  );
}

export default App;