import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import ProductCatalog from './components/ProductCatalog';
import Padel360Viewer from './components/Padel360Viewer';
import PadelCalculator from './components/PadelCalculator';
import PhotoGallery from './components/PhotoGallery';
import Team from './components/Team';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [currentLang, setCurrentLang] = useState('en'); // Supported: 'en', 'lt', 'lv', 'et', 'de', 'pl'

  return (
    <div className="app-container">
      {/* Sticky Header Navigation */}
      <Header currentLang={currentLang} setCurrentLang={setCurrentLang} />
      
      {/* Main Content Layout */}
      <main>
        {/* Hero Section */}
        <Hero currentLang={currentLang} />
        
        {/* Infinite Client Ticker */}
        <ClientLogos currentLang={currentLang} />
        
        {/* Product Catalog (White-Labeled Courts) */}
        <ProductCatalog currentLang={currentLang} />

        {/* Draggable Padel 360 Viewer */}
        <Padel360Viewer currentLang={currentLang} />

        {/* Interactive Cost Calculator */}
        <PadelCalculator currentLang={currentLang} />

        {/* Progressive Project Photo Gallery */}
        <PhotoGallery currentLang={currentLang} />

        {/* Company Intro & Project Manager Profile */}
        <Team currentLang={currentLang} />

        {/* Frequently Asked Questions */}
        <FAQ currentLang={currentLang} />

        {/* Validated Contact Forms */}
        <ContactForm currentLang={currentLang} />
      </main>

      {/* Footer Details */}
      <Footer currentLang={currentLang} />
    </div>
  );
}

export default App;
