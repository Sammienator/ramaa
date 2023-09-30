import React from 'react';
import './App.css';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <div >
    <Navbar/>
    <Hero/>
    <About/>
    <Gallery/>
    <Contact/>
    <Footer/>
      
    </div>
  );
}

export default App;
