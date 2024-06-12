
import React, { useEffect, useState, useRef } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
        setIsScrolled(currentScrollY > 50);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${ isScrolled ? 'scrolled' : ''} ${ isVisible ? '' : 'hidden'}`}>
      <video src="https://maacdelhi.com/img/maac-logo.mp4" autoPlay loop muted className="navbar-logo"></video>
      <ul className="navbar-menu">
        <li className="nav-item">Home</li>
        <li className="nav-item dropdown">
          Courses <span className="dropdown-arrow">&#x25BC;</span>
          <ul className="dropdown-content">
            <li>3D Animation</li>
            <li>VFX</li>
            <li>Gaming</li>
            <li>Web & Graphic design</li>
            <li>Short term specialized</li>
            <li>More Career Courses</li>
          </ul>
        </li>
        <li className="nav-item">Showcase</li>
        <li className="nav-item">Learn with us</li>
        <li className="nav-item">Placements</li>
      </ul>
      <button className="apply-now"><span>APPLY NOW</span></button>
      <div className="contact">Call: +91 82877 83710</div>
    </nav>
  );
};

export default Navbar;

