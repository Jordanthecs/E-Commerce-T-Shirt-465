import './App.css';
import Navbar from './navBar/navBar';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/contact';
import Product from './pages/product';
import Home from './pages/home';
import Cart from './pages/cart';
import About from './pages/about';
import Shop from './pages/shop';
import Login from './pages/login';
import Signup from './pages/signup';
import React, { useState } from 'react';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </div>
    </CartProvider>
  );
}

export default App;
