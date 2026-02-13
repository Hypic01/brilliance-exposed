
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <header className="about-header">
                <div className="container">
                     <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Mission
                    </motion.h1>
                </div>
            </header>

            {/* Mission Section */}
            <section className="about-section">
                <div className="container split-layout">
                    <div className="text-content">
                        <h2>Recognizing Brilliance</h2>
                        <p>
                            To recognize the brilliance inside each of us so the beauty of life is exposed.
                            This project aims to inspire and educate through the power of portraiture,
                            highlighting the often unsung heroes who have shaped our world through
                            science, art, and innovation.
                        </p>
                        <p>
                             By bringing these faces into the light, we hope to spark curiosity and
                             ambition in the next generation, showing them that brilliance looks like them.
                        </p>
                    </div>
                     <div className="image-content">
                         {/* Placeholder for Mission Image */}
                        <img src="https://images.unsplash.com/photo-1518998053901-5348d3969105?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale" alt="Abstract Light" />
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="about-section alt-bg">
                <div className="container split-layout reverse">
                    <div className="text-content">
                        <span className="subtitle">The Founder</span>
                        <h2>Meet Alexis Dixon</h2>
                        <p>
                            Alexis Dixon is a visionary photographer and curator dedicated to capturing the human spirit.
                            With a background in fine arts and a passion for social justice, she created Brilliance Exposed
                            to bridge the gap between historical achievement and contemporary recognition.
                        </p>
                        <blockquote className="founder-quote">
                            "I wanted to create a space where excellence isn't an exception, but an expectation."
                        </blockquote>
                    </div>
                    <div className="image-content">
                        {/* Placeholder for Founder Image */}
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale" alt="Alexis Dixon" />
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="about-section">
                 <div className="container split-layout">
                    <div className="text-content">
                        <span className="subtitle">Behind the Lens</span>
                        <h2>The Process</h2>
                        <p>
                             Each portrait is a result of intimate sessions where the subject's story
                             prompts the visual narrative. We use high-contrast black and white photography
                             to strip away distractions and focus solely on the essence of the individual.
                        </p>
                         <p>
                            The "Warm Spotlight" aesthetic is achieved through careful lighting and
                            post-processing, symbolizing the gold within—the brilliance waiting to be exposed.
                        </p>
                    </div>
                     <div className="image-content">
                        <img src="https://images.unsplash.com/photo-1554048612-387768052bf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale" alt="Photography Studio" />
                    </div>
                </div>
            </section>

             {/* Impact & Partners */}
            <section className="about-section impact-section">
                <div className="container">
                    <div className="impact-grid">
                        <div className="impact-item">
                            <h3>50+</h3>
                            <p>Portraits Commissioned</p>
                        </div>
                         <div className="impact-item">
                            <h3>10k+</h3>
                            <p>Students Reached</p>
                        </div>
                         <div className="impact-item">
                            <h3>5</h3>
                            <p>City Exhibitions</p>
                        </div>
                    </div>
                    
                    <div className="partners-list">
                        <h4>Our Partners</h4>
                        <p>Proudly supported by art institutions and educational foundations worldwide.</p>
                        {/* Partner Logos Placeholder */}
                        <div className="logo-grid">
                            <span>MOMA</span>
                            <span>The Smithsonian</span>
                            <span>Art Basel</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
