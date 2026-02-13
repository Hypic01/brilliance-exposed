
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PortraitModal.css';

const PortraitModal = ({ isOpen, onClose, portrait }) => {
  if (!isOpen || !portrait) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div 
                className="modal-content"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="modal-close" onClick={onClose}>&times;</button>
                
                <div className="modal-inner">
                    <div className="modal-image-wrapper">
                        <img src={portrait.image} alt={portrait.name} />
                    </div>
                    
                    <div className="modal-text-wrapper">
                        <h2 className="modal-name">{portrait.name}</h2>
                        <h3 className="modal-title">{portrait.title}</h3>
                        
                        <div className="modal-quote">
                            "{portrait.quote}"
                        </div>
                        
                        <div className="modal-bio">
                            <p>{portrait.bio || "Biography coming soon..."}</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PortraitModal;
