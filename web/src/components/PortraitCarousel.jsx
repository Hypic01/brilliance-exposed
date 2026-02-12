import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PortraitCarousel.css';

const portraits = [
  {
    id: 1,
    name: "Dr. Mae Jemison",
    title: "Engineer, Physician, NASA Astronaut",
    quote: "Never be limited by other people's limited imaginations.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale" 
  },
  {
    id: 2,
    name: "Dr. Neil deGrasse Tyson",
    title: "Astrophysicist, Author, Science Communicator",
    quote: "The good thing about science is that it's true whether or not you believe in it.",
     image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale"
  },
  {
    id: 3,
    name: "Katherine Johnson",
    title: "Mathematician, NASA Pioneer",
    quote: "I counted everything. I counted the steps to the road, the steps up to church.",
     image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale"
  },
  {
    id: 4,
    name: "Dr. Shirley Ann Jackson",
    title: "Physicist, President of RPI",
    quote: "I am not a role model. I am a possibility.",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale"
  },
  {
    id: 5,
    name: "Lonnie Johnson",
    title: "Engineer, Inventor",
    quote: "We're not just consumers of technology, we're creators.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale"
  },
  {
    id: 6,
    name: "Dr. Kizzmekia Corbett",
    title: "Viral Immunologist",
    quote: "The science is the science. You can't change the data.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale"
  },
  {
    id: 7,
    name: "Mark Dean",
    title: "Computer Scientist, Inventor",
    quote: "I really didn't think I was going to change the world.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale"
  },
  {
    id: 8,
    name: "Dr. Patricia Bath",
    title: "Ophthalmologist, Inventor",
    quote: "Do not allow your mind to be imprisoned by majority thinking.",
    image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale"
  },
  {
    id: 9,
    name: "George Washington Carver",
    title: "Agricultural Scientist",
    quote: "Education is the key to unlock the golden door of freedom.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale"
  },
  {
    id: 10,
    name: "Madam C.J. Walker",
    title: "Entrepreneur, Philanthropist",
    quote: "I got my start by giving myself a start.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale"
  }
];

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
