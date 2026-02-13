
import React from 'react';
import { motion } from 'framer-motion';
import './Donate.css';

const donationTiers = [
    {
        id: 'tier1',
        amount: '$25',
        level: 'Friend',
        description: "Provides art supplies for one student workshop.",
        benefits: ["Digital Thank You", "Quarterly Newsletter"]
    },
    {
        id: 'tier2',
        amount: '$100',
        level: 'Supporter',
        description: "Funds a professional portrait session for one nominee.",
        benefits: ["All Friend Benefits", "Name on Website", "Early Event Access"]
    },
    {
        id: 'tier3',
        amount: '$500',
        level: 'Patron',
        description: "Sponsors a community exhibition event.",
        benefits: ["All Supporter Benefits", "Signed Exhibition Print", "VIP Reception Invite"]
    },
    {
        id: 'tier4',
        amount: '$1000+',
        level: 'Benefactor',
        description: "Fuels the expansion of Brilliance Exposed to new cities.",
        benefits: ["All Patron Benefits", "Private Studio Tour", "Dedication in Catalog"]
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
                        Your contribution helps us capture and share stories that inspire the world.
                    </motion.p>
                </div>
            </header>

            <div className="container">
                {/* Impact Statement */}
                <section className="impact-statement">
                    <div className="impact-text">
                        <h2>Why We Need Your Help</h2>
                        <p>
                            Brilliance Exposed is a non-profit initiative dedicated to changing narratives.
                            We rely on the generosity of individuals like you to fund our photography sessions,
                            educational workshops, and public exhibitions. Every dollar goes directly towards
                            shining a light on the brilliance within our communities.
                        </p>
                    </div>
                </section>

                {/* Donation Tiers */}
                <div className="donation-tiers">
                    {donationTiers.map((tier, index) => (
                        <motion.div 
                            key={tier.id}
                            className={`tier-card ${index === 3 ? 'featured' : ''}`}
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
                    <h3>Other Ways to Support</h3>
                    <div className="giving-options">
                        <div className="option">
                            <h4>Volunteer</h4>
                            <p>Join our team at events and workshops.</p>
                        </div>
                        <div className="option">
                            <h4>In-Kind</h4>
                            <p>Donate equipment or services.</p>
                        </div>
                         <div className="option">
                            <h4>Corporate</h4>
                            <p>Partner with us for sponsorship.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Donate;
