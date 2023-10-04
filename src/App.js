import React from 'react';
import './App.css';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';


function App() {
  return (
    <div >
    <Navbar/>
    <Hero/>
    <About/>
    <Gallery/>
   
    
    <ContactSection/>
    <Footer/>
      
    </div>
  );
}

export default App;
