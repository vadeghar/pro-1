// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Go Girlee</p>
      <p>
        Follow us on 
        <a href="#" aria-label="Instagram" style={{ margin: '0 5px', color: '#FFF' }}>
          <i className="fab fa-instagram"></i>
        </a> 
        | 
        <a href="#" aria-label="Facebook" style={{ margin: '0 5px', color: '#FFF' }}>
          <i className="fab fa-facebook"></i>
        </a>
      </p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#440025',
  color: '#fff',
  textAlign: 'center',
  position: 'fixed',
  bottom: '0',
  width: '100%'
};

export default Footer;
