import { motion } from 'framer-motion';
import { useEffect } from 'react';
import './IntroOverlay.css';

const IntroOverlay = ({ onComplete }) => {
  useEffect(() => {
    // 1.5s fade in + 3s hold = 4.5s
    // The component will unmount after onComplete calls parent state update
    const timer = setTimeout(() => {
      onComplete();
    }, 4500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="intro-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
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
