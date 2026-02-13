
import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#000000',
      color: '#FFFFFF',
      padding: '60px 40px',
      borderTop: '1px solid #333',
      fontFamily: 'var(--font-sans)',
      marginTop: 'auto'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px'
      }}>
        {/* Branding */}
        <div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', marginBottom: '16px' }}>
            BRILLIANCE <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>exposed</span>
          </h3>
          <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.6' }}>
            Celebrating the brilliance inside each of us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px', color: '#888' }}>Explore</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['Home', 'Portraits', 'About', 'Events'].map(link => (
              <li key={link} style={{ marginBottom: '12px' }}>
                <a href={`/${link.toLowerCase()}`} style={{ color: '#FFF', textDecoration: 'none', fontSize: '14px' }}>{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px', color: '#888' }}>Support</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['Donate', 'Volunteer', 'Nominate'].map(link => (
              <li key={link} style={{ marginBottom: '12px' }}>
                <a href={`/${link.toLowerCase()}`} style={{ color: '#FFF', textDecoration: 'none', fontSize: '14px' }}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Legal */}
        <div>
             <h4 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px', color: '#888' }}>Legal</h4>
             <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '14px' }}>Privacy Policy</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '14px' }}>Terms of Use</a></li>
             </ul>
        </div>
      </div>
      
      <div style={{
          borderTop: '1px solid #222',
          marginTop: '60px',
          paddingTop: '20px',
          textAlign: 'center',
          color: '#666',
          fontSize: '12px'
      }}>
        &copy; {new Date().getFullYear()} Brilliance Exposed. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
