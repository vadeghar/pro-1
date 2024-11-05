// src/components/ProductCard.js
import React from 'react';

function ProductCard({ name, price, image }) {
  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imageStyle} />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

// Updated `cardStyle` with responsive settings
const cardStyle = {
  border: '1px solid #ddd',
  padding: '1rem',
  margin: '1rem',
  textAlign: 'center',
  width: '100%',
  maxWidth: '200px', // Limits width on larger screens while allowing full width on smaller screens
};

const imageStyle = {
  width: '100%',
  height: '150px',
  objectFit: 'cover'
};

export default ProductCard;
