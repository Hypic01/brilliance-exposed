
import React from 'react';
import { motion } from 'framer-motion';
import './Events.css';

const eventsValues = [
    {
        id: 1,
        title: "Charles H. Wright Museum of African American History",
        date: "March 15 — June 30, 2026",
        time: "",
        location: "Detroit, Michigan",
        type: "Current Exhibition",
        description: "The inaugural exhibition featuring over 30 black-and-white portraits celebrating Black professionals in STEAM. Includes guided tours, educational programming, and a special reception.",
        image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale"
    },
    {
        id: 2,
        title: "Galerie Dix-Neuf",
        date: "September 2026",
        time: "",
        location: "Paris, France",
        type: "Upcoming",
        description: "A curated selection of portraits showcasing the intersection of science, art, and identity — exhibited in the heart of Paris.",
        image: "https://images.unsplash.com/photo-1475721027767-p05fa6ad1437?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale"
    },
    {
        id: 3,
        title: "Tiffany & Co. Reception",
        date: "November 2026",
        time: "",
        location: "New York, NY",
        type: "Upcoming",
        description: "An intimate reception at the iconic Tiffany & Co. flagship, celebrating brilliance in STEAM with an evening of portraiture and conversation.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale"
    }
];

const Events = () => {
    return (
        <div className="events-page">
             <header className="events-header">
                <div className="container">
                     <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Events & Exhibitions
                    </motion.h1>
                    <motion.p
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Experience Brilliance Exposed at museums and galleries worldwide. From Detroit to Paris — each venue brings the exhibition to life.
                    </motion.p>
                </div>
            </header>

            <div className="container">
                <div className="events-list">
                    {eventsValues.map((event, index) => (
                        <motion.div 
                            key={event.id}
                            className="event-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="event-image">
                                <img src={event.image} alt={event.title} />
                                <div className="event-date-badge">
                                    <span>{event.date.split(',')[0]}</span>
                                </div>
                            </div>
                            <div className="event-details">
                                <span className="event-type">{event.type}</span>
                                <h3>{event.title}</h3>
                                <div className="event-meta">
                                    <p className="event-location">{event.location}</p>
                                    <p className="event-date">{event.date}</p>
                                </div>
                                {event.description && <p className="event-description">{event.description}</p>}
                                <button className="event-cta">Learn More</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Newsletter Section */}
            <section className="newsletter-section">
                <div className="container">
                    <h3>Stay Connected</h3>
                    <p>Subscribe to receive updates on upcoming exhibitions and events.</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Your Email Address" />
                        <button type="button">Subscribe</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Events;
