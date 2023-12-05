import './App.css';
import Navbar from './navBar/navBar';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/contact';
import Product from './pages/product';
import Home from './pages/home';
import Cart from './pages/cart';
import About from './pages/about';
import Shop from './pages/shop';
import React, { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
  };
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
  );
}

export default App;
