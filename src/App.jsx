import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Index from './components/Index';
import Solutions from './components/Solutions';
import Pricing from './components/Pricing';
import About from './components/About';
import Login from './components/Login';
import Demo from './components/Demo';
import Features from './components/Features';
import Integrations from './components/Integrations';
import Careers from './components/Careers';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/features" element={<Features />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
