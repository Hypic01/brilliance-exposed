
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portraits } from '../data/portraits';
import PortraitModal from '../components/PortraitModal';
import './Portraits.css';

const Portraits = () => {
    const [selectedPortrait, setSelectedPortrait] = useState(null);

    return (
        <div className="portraits-page">
            <div className="container">
                <header className="portraits-header">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        The Collection
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Celebrating the brilliance of individuals who illuminate our world through science, art, leadership, and innovation. Each portrait captures not just a face, but a legacy.
                    </motion.p>
                </header>
                
                <div className="portraits-grid">
                    {portraits.map((portrait, index) => (
                        <motion.div 
                            key={portrait.id}
                            className="portrait-grid-item"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedPortrait(portrait)}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <div className="grid-image-wrapper">
                                <img src={portrait.image} alt={portrait.name} loading="lazy" />
                                <div className="grid-overlay">
                                    <span>View Story</span>
                                </div>
                            </div>
                            <div className="grid-info">
                                <h3>{portrait.name}</h3>
                                <p>{portrait.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            <PortraitModal 
                isOpen={!!selectedPortrait} 
                onClose={() => setSelectedPortrait(null)} 
                portrait={selectedPortrait} 
            />
        </div>
    );
};

export default Portraits;
