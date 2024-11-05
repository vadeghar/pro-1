import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';

import kajal_1 from './imgs/soft_kohl_kajal/SB-E1_FOP_01_1800x1800.jpg'
import kajal_2 from './imgs/soft_kohl_kajal/SB-E1_FOP_02_1800x1800.jpg'
import kajal_3 from './imgs/soft_kohl_kajal/SB-E1_FOP_04_1800x1800.jpg'



function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <h2>Featured Products</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <ProductCard name="Lipstick" price={20} image={kajal_1} />
        <ProductCard name="Foundation" price={30} image={kajal_2} />
        <ProductCard name="Eyeliner" price={15} image={kajal_3} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
