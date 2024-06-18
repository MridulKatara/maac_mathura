// Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import maac from '../images/maac.png'
import '../styles/Footer.css'; // Import the CSS file for styling

const Footer = () => {
  const phoneNumber = '918859833392';
  const message = 'Hello, I would like to know more about your services.';
const createWhatsAppLink = (phone, msg) => {
  const encodedMessage = encodeURIComponent(msg);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

const whatsappUrl = createWhatsAppLink(phoneNumber, message);
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src= {maac} alt="Company Logo" />
      </div>
      <div className="footer-paragraph">
        <p>This will be through its wide network of centers. Mac has prepared thousands of students for career in animation, VFX, filmmaking, gaming, web, and graphic design. The academy provides quality education through career-oriented courses. Leading to top-notch job placements, Mac has a dedicated research and development team consisting of industry professionals.</p>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#short-term">Short Term</a></li>
            <li><a href="#more-courses">More Courses</a></li>
            <li><a href="#placements">Placements</a></li>
            <li><a href="#apply-now">Apply Now</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Courses</h3>
          <ul>
            <li><a href="#3d-animation">3D Animation</a></li>
            <li><a href="#vfx">VFX</a></li>
            <li><a href="#gaming">Gaming</a></li>
            <li><a href="#web-design">Web and Graphic Design</a></li>
            <li><a href="#short-term">Short Term</a></li>
            <li><a href="#more-courses">More Courses</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Mobile: 91 8859833392</p>
          <ul className="social-media">
          <li className='abc'><a href="https://www.instagram.com/maacmathura?igsh=MmlhbzA1MHUzdGlu" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="icon" />
      </a></li>
      <li className='abc'><a href="https://www.facebook.com/profile.php?id=61555951572659" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="icon" />
      </a></li>
      <li className='abc'><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="icon" />
      </a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
