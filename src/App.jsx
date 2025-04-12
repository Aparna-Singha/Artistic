import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useState } from 'react'

import './App.css'
import HomePage from './pages/home_page';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App