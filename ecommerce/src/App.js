import './App.css';
import React from 'react';
import Navbar from './navBar/navBar';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/contact';
import Home from './pages/home';
import Cart from './pages/cart';
import About from './pages/about';
import Shop from './pages/shop';

function App() {
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
