
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleCart, cartCount } = useCart();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navigation ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-brilliance">BRILLIANCE</span>
          <span className="logo-exposed">exposed</span>
          <div className="logo-circle"></div>
        </Link>
        
        <div className="nav-actions">
            <button className="cart-trigger" onClick={toggleCart} aria-label="Open Cart">
                Cart ({cartCount})
            </button>
            <button 
                className="mobile-menu-toggle" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
            >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/portraits" onClick={closeMenu}>Portraits</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/events" onClick={closeMenu}>Events</Link></li>
          <li><Link to="/shop" onClick={closeMenu}>Shop</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/donate" className="donate-link" onClick={closeMenu}>Donate</Link></li>
          <li className="mobile-only"><button onClick={() => { toggleCart(); closeMenu(); }}>Cart ({cartCount})</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
