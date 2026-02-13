import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portraits } from '../data/portraits';
import './PortraitCarousel.css';

const PortraitCarousel = ({ isActive }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portraits.length);
    }, 12000); // 12 seconds per slide

    return () => clearInterval(interval);
  }, [isActive]);

  const getVisibleItems = () => {
    const prevIndex = (currentIndex - 1 + portraits.length) % portraits.length;
    const nextIndex = (currentIndex + 1) % portraits.length;
    return [
      { ...portraits[prevIndex], position: 'prev' },
      { ...portraits[currentIndex], position: 'active' },
      { ...portraits[nextIndex], position: 'next' }
    ];
  };

  if (!isActive) return null;

  return (
    <div className="carousel-step-container">
      <div className="carousel-track-step">
        <AnimatePresence initial={false} mode='popLayout'>
          {getVisibleItems().map((item) => (
            <motion.div
              key={item.id}
              className={`carousel-card ${item.position}`}
              
              // Initial State: Different based on position, but strictly for new items entering
              initial={{ 
                opacity: 0, 
                x: '100%', // Default entry from right
                scale: 0.9 
              }}
              
              // Animation Targets
              animate={{ 
                opacity: item.position === 'active' ? 1 : 0.3,
                x: item.position === 'prev' ? '-110%' : item.position === 'next' ? '110%' : '0%',
                scale: item.position === 'active' ? 1 : 0.9,
                zIndex: item.position === 'active' ? 2 : 1
              }}
              
              // Exit State: When item leaves (Slide out to left)
              exit={{ 
                opacity: 0, 
                x: '-150%', 
                scale: 0.9 
              }}
              
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // Elegant easeOut for smooth slide
            >
              <div className="carousel-content-wrapper">
                  <div className="card-image-wrapper">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="card-text-wrapper">
                    <h2 className="card-name">{item.name}</h2>
                    <p className="card-title">{item.title}</p>
                    <p className="card-quote">"{item.quote}"</p>
                  </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="carousel-indicators">
          {portraits.map((_, idx) => (
              <button 
                key={idx} 
                className={`indicator ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
              />
          ))}
      </div>
    </div>
  );
};

export default PortraitCarousel;
