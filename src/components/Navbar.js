// src/components/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../imgs/logo.png';
import face_1 from '../imgs/logo.png';
import face_2 from '../imgs/logo.png';
import face_3 from '../imgs/logo.png';

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isFaceSubmenuOpen, setFaceSubmenuOpen] = useState(false);
  const [isEyeSubmenuOpen, setEyeSubmenuOpen] = useState(false);

  const dropdownRef = useRef(null);
  const faceSubmenuRef = useRef(null);
  const eyeSubmenuRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  // Show Face submenu on hover
  const openFaceSubmenu = () => {
    setFaceSubmenuOpen(true);
    closeEyeSubmenu();
  };

  // Close Face submenu on hover leave
  const closeFaceSubmenu = () => {
    setFaceSubmenuOpen(false);
  };
  const openEyeSubmenu = () => {
    setEyeSubmenuOpen(true);
    closeFaceSubmenu();
  };

  // Close Eye submenu on hover leave
  const closeEyeSubmenu = () => {
    setEyeSubmenuOpen(false);
  };

  const toggleEyeSubmenu = () => setEyeSubmenuOpen(!isEyeSubmenuOpen);

  const handleClickOutside = (event) => {
    console.log("Clicked outside:", event.target);
    console.log(dropdownRef.current && !dropdownRef.current.contains(event.target));
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
      setSearchOpen(false);
    }
    if (faceSubmenuRef.current && !faceSubmenuRef.current.contains(event.target)) {
      setFaceSubmenuOpen(false); // Close the Face submenu if clicked outside
    }
    if (eyeSubmenuRef.current && !eyeSubmenuRef.current.contains(event.target)) {
      setEyeSubmenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = ['Face', 'Eye', 'Lips', 'Nail', 'Brushes & Tools', 'New Arrivals', 'Gifting', 'Best Deal', 'Services'];

  const faceSubmenuItems = {
    heading: "FACE",
    options: {
      col1: ["Foundations", "Powders", "Concealers", "Primers", "Blushes + Bronzers"],
      col2: ["Understand Your M·A·C Foundation Shade", "Highlighters", "Foundations Finder"]
    },
    images: [
      { src: face_1, description: "Description 1", link: "/shop1" },
      { src: face_2, description: "Description 2", link: "/shop2" },
      { src: face_3, description: "Description 3", link: "/shop3" }
    ]
  };

  const eyeSubmenuItems = {
    heading: "EYE",
    options: {
      col1: ["Kajal", "Eye Liners", "Mascaras", "Eye Palettes + Kits"],
      col2: ["Eyebrows", "Eyeshadow", "Lashes"]
    },
    images: [
      { src: face_1, description: "Eye Description 1", link: "/shop1" },
      { src: face_2, description: "Eye Description 2", link: "/shop2" },
      { src: face_3, description: "Eye Description 3", link: "/shop3" }
    ]
  };

  const lipsSubmenuItems = {
    heading: "LIPS",
    options: {
      col1: ["Lipsticks", "Liquid Lip Colours", "Mini M·A·C", "Lip Glosses", "Lip Liners"],
      col2: ["Lip Balm + Primers", "Virtual Try-On", "Lip Colour Finder"]
    },
    images: [
      { src: face_1, description: "Lip Product 1", link: "/lipshop1" },
      { src: face_1, description: "Lip Product 2", link: "/lipshop2" },
      { src: face_1, description: "Lip Product 3", link: "/lipshop3" }
    ]
  };

  return (
    <>
      {isSearchOpen && (
        <div className="search-container">
          <input type="text" className="search-input-full" placeholder="Search products..." />
        </div>
      )}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            <img src={logo} alt="Cosmetic Store Logo" className="logo-img" />
          </a>

          <div className="navbar-menu">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="navbar-item"
                onMouseEnter={item === 'Face' ? openFaceSubmenu : item === 'Eye' ? openEyeSubmenu : null} // Open on hover for Face and Eye
              >
                <a href={`#${item.toLowerCase()}`} className="navbar-link">{item}</a>

                {/* Display submenu if hovering on Face */}
                {item === 'Face' && isFaceSubmenuOpen && (
                  <div className="face-submenu" ref={faceSubmenuRef}>
                    <div className="submenu-content">
                      <div className="submenu-column">
                        <h4>{faceSubmenuItems.heading}</h4>
                        <div className="submenu-options">
                          <div className="submenu-options-col">
                            {faceSubmenuItems.options.col1.map((option, idx) => (
                              <a key={idx} href={`#${option.toLowerCase().replace(/\s/g, '-')}`} className="submenu-option">{option}</a>
                            ))}
                          </div>
                          <div className="submenu-options-col">
                            {faceSubmenuItems.options.col2.map((option, idx) => (
                              <a key={idx} href={`#${option.toLowerCase().replace(/\s/g, '-')}`} className="submenu-option">{option}</a>
                            ))}
                          </div>
                        </div>
                      </div>

                      {faceSubmenuItems.images.map((image, idx) => (
                        <div key={idx} className="submenu-column submenu-image-column">
                          <img src={image.src} alt={image.description} className="submenu-image" />
                          <p className="submenu-description">{image.description}</p>
                          <a href={image.link} className="submenu-link">Shop</a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Display submenu if hovering on Eye */}
                {item === 'Eye' && isEyeSubmenuOpen && (
                  <div className={`eye-submenu ${isEyeSubmenuOpen ? 'eye-submenu-visible' : ''}`}
                  ref={eyeSubmenuRef}>
                    <div className="submenu-content">
                      <div className="submenu-column">
                        <h4>{eyeSubmenuItems.heading}</h4>
                        <div className="submenu-options">
                          <div className="submenu-options-col">
                            {eyeSubmenuItems.options.col1.map((option, idx) => (
                              <a key={idx} href={`#${option.toLowerCase().replace(/\s/g, '-')}`} className="submenu-option">{option}</a>
                            ))}
                          </div>
                          <div className="submenu-options-col">
                            {eyeSubmenuItems.options.col2.map((option, idx) => (
                              <a key={idx} href={`#${option.toLowerCase().replace(/\s/g, '-')}`} className="submenu-option">{option}</a>
                            ))}
                          </div>
                        </div>
                      </div>

                      {eyeSubmenuItems.images.map((image, idx) => (
                        <div key={idx} className="submenu-column submenu-image-column">
                          <img src={image.src} alt={image.description} className="submenu-image" />
                          <p className="submenu-description">{image.description}</p>
                          <a href={image.link} className="submenu-link">Shop</a>
                        </div>
                      ))}

                      
                    </div>
                  </div>
                )}

                {/* Display submenu if hovering on Eye */}
                {item === 'Eye' && isEyeSubmenuOpen && (
                  <div className={`eye-submenu ${isEyeSubmenuOpen ? 'eye-submenu-visible' : ''}`}
                  ref={eyeSubmenuRef}>
                    <div className="submenu-content">
                      <div className="submenu-column">
                        <h4>{eyeSubmenuItems.heading}</h4>
                        <div className="submenu-options">
                          <div className="submenu-options-col">
                            {eyeSubmenuItems.options.col1.map((option, idx) => (
                              <a key={idx} href={`#${option.toLowerCase().replace(/\s/g, '-')}`} className="submenu-option">{option}</a>
                            ))}
                          </div>
                          <div className="submenu-options-col">
                            {eyeSubmenuItems.options.col2.map((option, idx) => (
                              <a key={idx} href={`#${option.toLowerCase().replace(/\s/g, '-')}`} className="submenu-option">{option}</a>
                            ))}
                          </div>
                        </div>
                      </div>

                      {eyeSubmenuItems.images.map((image, idx) => (
                        <div key={idx} className="submenu-column submenu-image-column">
                          <img src={image.src} alt={image.description} className="submenu-image" />
                          <p className="submenu-description">{image.description}</p>
                          <a href={image.link} className="submenu-link">Shop</a>
                        </div>
                      ))}

                      
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="navbar-icons">
            <div className="navbar-item" onClick={toggleSearch}>
              <i className="fas fa-search"></i>
            </div>
            <div className="navbar-item" onClick={toggleDropdown}>
              <i className="fas fa-user"></i>
            </div>
            {isDropdownOpen && (
              <div ref={dropdownRef} className="dropdown-menu">
                <a href="/orders" className="dropdown-item">Orders</a>
                <a href="/profile" className="dropdown-item">Profile</a>
                <a href="/change-password" className="dropdown-item">Change Password</a>
              </div>
            )}
            <div className="navbar-item">
              <i className="fas fa-shopping-cart"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
