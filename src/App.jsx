
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import IntroOverlay from './components/IntroOverlay';

// Pages
import Home from './pages/Home';
import Portraits from './pages/Portraits';
import About from './pages/About';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Shop from './pages/Shop';

import './App.css';

function App() {
  // Initialize state based on sessionStorage
  const [introComplete, setIntroComplete] = useState(() => {
    return sessionStorage.getItem('introComplete') === 'true';
  });

  const handleIntroComplete = () => {
    setIntroComplete(true);
    sessionStorage.setItem('introComplete', 'true');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <AnimatePresence>
            {!introComplete && (
                <IntroOverlay onComplete={handleIntroComplete} />
            )}
        </AnimatePresence>

        {/* Navigation is always rendered but z-index will put it behind overlay initially */}
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home introComplete={introComplete} />} />
          <Route path="/portraits" element={<Portraits />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
