import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="logo">
          <span className="logo-brilliance">BRILLIANCE</span>
          <span className="logo-exposed">exposed</span>
          <div className="logo-circle"></div>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#portraits">Portraits</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#store">Store</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
