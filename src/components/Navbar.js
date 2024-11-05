// src/components/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../imgs/logo.png';

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
      setSearchOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = ['FACE', 'EYE', 'LIPS', 'Nail', 'BRUSHES & TOOLS', 'New Arrivals', 'Gifting', 'Best Deal', 'Skin Care'];

  return (
    <>
      {isSearchOpen && (
        <div className="search-container">
          <input type="text" className="search-input-full" placeholder="Search products..." />
        </div>
      )}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Section-1: Logo */}
          <a href="/" className="navbar-logo">
                        <img src={logo} alt="Cosmetic Store Logo" className="logo-img" />
                    </a>

          {/* Section-2: Menu items centered */}
          <div className="navbar-menu">
            {menuItems.map((item, index) => (
              <div key={index} className="navbar-item">
                <a href={`#${item.toLowerCase()}`} className="navbar-link">{item}</a>
              </div>
            ))}
          </div>

          {/* Section-3: Icons aligned to the right */}
          <div className="navbar-icons">
            <div className="navbar-item" onClick={toggleSearch}>
              <i className="fas fa-search"></i>
            </div>
            <div className="navbar-item" onClick={toggleDropdown}>
              <i className="fas fa-user"></i>
            </div>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <a href="/orders" className="dropdown-item">Orders</a>
                <a href="/profile" className="dropdown-item">Profile</a>
                <a href="/change-password" className="dropdown-item">Change Password</a>
              </div>
            )}
            <a href="/cart" className="navbar-item">
              <i className="fas fa-shopping-cart"></i>
            </a>
            <a href="/wishlist" className="navbar-item">
              <i className="fas fa-heart"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
