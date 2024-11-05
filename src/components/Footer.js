// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 Cosmetic Store</p>
      <p>Follow us on <a href="#">Instagram</a> | <a href="#">Facebook</a></p>
    </footer>
  );
}

const footerStyle = {
  padding: '1rem',
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  position: 'fixed',
  bottom: '0',
  width: '100%'
};

export default Footer;
