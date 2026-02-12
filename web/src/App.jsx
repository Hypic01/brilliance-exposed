import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroOverlay from './components/IntroOverlay';
import Navigation from './components/Navigation';
import PortraitCarousel from './components/PortraitCarousel';
import './App.css';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="app">
      <AnimatePresence>
        {!introComplete && (
          <IntroOverlay onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introComplete ? 1 : 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <Navigation />
      </motion.div>
      
      <main>
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: introComplete ? 1 : 0 }}
           transition={{ duration: 2, ease: "easeOut" }} // Slow cinematic fade
        >
           <PortraitCarousel isActive={introComplete} />
        </motion.div>
      </main>
    </div>
  );
}

export default App;
