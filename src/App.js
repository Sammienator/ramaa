import React from 'react';
import './App.css';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';

import ContactSection from './components/ContactSection';
import PricingSection from './components/PricingSection';


function App() {
  return (
    <div >
    <Navbar/>
    <Hero/>
    <About/>
    
    <PricingSection/>
    <ContactSection/>
    <Footer/>
      
    </div>
  );
}

export default App;
