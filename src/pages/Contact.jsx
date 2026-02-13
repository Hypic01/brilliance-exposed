
import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
             <header className="contact-header">
                <div className="container">
                     <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        We'd love to hear from you. Reach out for inquiries, partnerships, or just to say hello.
                    </motion.p>
                </div>
            </header>

            <div className="container contact-layout">
                {/* Contact Form */}
                <motion.div 
                    className="contact-form-wrapper"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" />
                        </div>
                         <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <select id="subject">
                                <option value="general">General Inquiry</option>
                                <option value="press">Press & Media</option>
                                <option value="partnership">Partnerships</option>
                                <option value="events">Events</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="How can we help?"></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div 
                    className="contact-info-wrapper"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="info-card">
                        <h3>General Inquiries</h3>
                        <p><a href="mailto:info@brillianceexposed.org">info@brillianceexposed.org</a></p>
                    </div>
                     <div className="info-card">
                        <h3>Press & Media</h3>
                         <p><a href="mailto:press@brillianceexposed.org">press@brillianceexposed.org</a></p>
                    </div>
                     <div className="info-card">
                        <h3>Partnerships</h3>
                         <p><a href="mailto:partnerships@brillianceexposed.org">partnerships@brillianceexposed.org</a></p>
                    </div>
                    
                    <div className="social-links">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <span>Instagram</span>
                            <span>Twitter</span>
                            <span>Facebook</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
