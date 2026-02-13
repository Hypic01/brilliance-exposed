
import React from 'react';
import { motion } from 'framer-motion';
import './Events.css';

const eventsValues = [
    {
        id: 1,
        title: "Brilliance Exposed: The Opening",
        date: "March 15, 2026",
        time: "6:00 PM - 9:00 PM",
        location: "The Modern Gallery, New York",
        type: "Exhibition Opening",
        image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale"
    },
    {
        id: 2,
        title: "Artist Talk: Alexis Dixon",
        date: "March 20, 2026",
        time: "2:00 PM - 4:00 PM",
        location: "Auditorium A, NY Public Library",
        type: "Lecture & Q&A",
        image: "https://images.unsplash.com/photo-1475721027767-p05fa6ad1437?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale"
    },
    {
        id: 3,
        title: "Youth Workshop: Finding Your Light",
        date: "April 05, 2026",
        time: "10:00 AM - 1:00 PM",
        location: "Community Arts Center",
        type: "Workshop",
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
                        Join us in celebrating brilliance and inspiring the next generation.
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
                                    <p>{event.time}</p>
                                    <p>{event.location}</p>
                                </div>
                                <button className="event-cta">Get Tickets</button>
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
