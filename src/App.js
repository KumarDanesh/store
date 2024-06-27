// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LogInPage from './pages/LogInPage'
import ProductsPage from './pages/ProductsPage';

const App = () => {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/login" element={<LogInPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
