import React from 'react';
import Navbar from './Navbar';
import Sidebar from './SideNav';
import Footer from './Footer';
import Picture from './Picture';
import '../styles/PlacementPage.css'; // Assuming you have this CSS file

const PlacementPage = () => {
  return (
    <div className="placement-page">
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <h1 className="page-heading">Placement</h1>
        <div className="content-container">
          <div className="left-section">
            <h2 className="why-maac-heading">Why MAAC?</h2>
            <p className="why-maac-paragraph">
            MAAC provides job-oriented graphics, animation, VFX, gaming, and digital design courses to students. 
            It also offers career development training to prepare students for different job roles in the media 
            and entertainment industry globally.Animation studios, gaming studios, publishing houses, 
            TV channels, production houses, and advertising agencies are continuously looking out for 
            photographers, UI designers, gaming experts, animators, filmmakers, website developers, VFX artists,
            photographers, and graphic designers to work with them. MAAC helps such organizations to find 
            skilled and talented individuals who knows the demand of the industry and work as professionals in 
            their respective fields
            </p>
          </div>
          <div className="right-section">
            <img src= {Picture} alt="Description" className="image-or-svg" />
          </div>
        </div>
        <div className="company-logos">
          {Array.from({ length: 22 }).map((_, index) => (
            <img 
              key={index}
              src={`path-to-your-logo-${index + 1}`} 
              alt={`Company logo ${index + 1}`} 
              className="company-logo"
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlacementPage;
