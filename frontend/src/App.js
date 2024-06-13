// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomepageContent';
import Placement from './components/PlacementPage';
import SideNavbar from './components/SideNav';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <SideNavbar />
        <Route path="/" exact component={HomePage} />
        <Route path="/placements" component={Placement} />
        {/* Add more routes as needed */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
