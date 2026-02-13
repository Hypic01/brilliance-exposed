
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import './IntroOverlay.css';

const IntroOverlay = ({ onComplete }) => {
  useEffect(() => {
    // 3.5s hold time before triggering completion
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="intro-overlay"
      initial={{ opacity: 1 }} // Start purely opaque (black)
      animate={{ opacity: 1 }} // Stay opaque while quoting
      exit={{ opacity: 0 }} // Fade out to reveal content
      transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth 1.5s fade out
    >
      <div className="quote-container">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="intro-quote">
            "When we recognize the brilliance inside each of us the beauty of life is exposed."
          </p>
          <p className="intro-attribution">— Alexis Dixon, Founder</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroOverlay;
