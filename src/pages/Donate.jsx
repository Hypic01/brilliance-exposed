
import React from 'react';
import { motion } from 'framer-motion';
import './Donate.css';

const donationTiers = [
    {
        id: 'tier1',
        amount: '$50',
        level: 'Supporter',
        description: "Help bring the exhibition to a new community. Your contribution supports transportation, installation, and educational materials.",
        benefits: ["Digital Thank You", "Quarterly Newsletter", "Name on Website"]
    },
    {
        id: 'tier2',
        amount: '$250',
        level: 'Patron',
        description: "Fund a portrait's exhibition journey — from photography to framing to gallery installation. Receive a signed exhibition catalog.",
        benefits: ["All Supporter Benefits", "Signed Exhibition Catalog", "Early Event Access"]
    },
    {
        id: 'tier3',
        amount: '$1,000+',
        level: 'Visionary',
        description: "Become a founding partner of Brilliance Exposed. Receive VIP access to all exhibition openings, exclusive prints, and recognition in the catalog.",
        benefits: ["All Patron Benefits", "VIP Reception Access", "Exclusive Prints", "Catalog Recognition"]
    }
];

const Donate = () => {
    return (
        <div className="donate-page">
            <header className="donate-header">
                <div className="container">
                     <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Support Brilliance
                    </motion.h1>
                    <motion.p
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Your generosity helps bring Brilliance Exposed to museums, galleries, and communities around the world — inspiring future generations in STEAM.
                    </motion.p>
                </div>
            </header>

            <div className="container">
                {/* Impact Statement */}
                <section className="impact-statement">
                    <div className="impact-text">
                        <h2>Your Impact</h2>
                        <blockquote>
                            "Every contribution helps illuminate the stories of those whose brilliance has been overlooked. Together, we can ensure that future generations see themselves reflected in the legacy of innovation, creativity, and excellence."
                        </blockquote>
                        <p className="attribution">— Alexis Dixon, Founder</p>
                    </div>
                </section>

                {/* Donation Tiers */}
                <div className="donation-tiers">
                    {donationTiers.map((tier, index) => (
                        <motion.div 
                            key={tier.id}
                            className={`tier-card ${index === 2 ? 'featured' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="tier-header">
                                <h3>{tier.level}</h3>
                                <div className="amount">{tier.amount}</div>
                            </div>
                            <p className="tier-description">{tier.description}</p>
                            <ul className="tier-benefits">
                                {tier.benefits.map((benefit, i) => (
                                    <li key={i}>{benefit}</li>
                                ))}
                            </ul>
                            <button className="donate-btn">Donate {tier.amount}</button>
                        </motion.div>
                    ))}
                </div>

                {/* Other Ways to Give */}
                <section className="other-giving">
                    <h3>Major Gifts & Sponsorships</h3>
                    <p className="major-gifts-intro">For gifts of $5,000 or more</p>
                    <p className="major-gifts-desc">
                        We welcome conversations about transformative partnerships. Major gifts directly fund
                        exhibition installations at new venues, educational programming for underserved communities,
                        and the continued documentation of brilliance in STEAM.
                    </p>
                    <p className="major-gifts-contact">
                        <a href="mailto:mymediationsolution@gmail.com">mymediationsolution@gmail.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Donate;
