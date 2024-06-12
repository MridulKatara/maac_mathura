// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomepageContent';
import WhatsAppLink from './components/WhatsAppLink';
import PhoneLink from './components/PhoneLink';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <WhatsAppLink />
      <PhoneLink />
      <Footer />
    </div>
  );
}

export default App;
