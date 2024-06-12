import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/ImageSlider.css'; // Import your CSS file with animations

import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpeg';
import image4 from '../images/image4.jpg';

const ImageSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateY(-${scrollTop * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="slider-container" ref={sliderRef}>
      <Slider {...settings}>
        <div>
          <a href="vfx-course.php">
            <img className="img-fluid" src={image1} alt="VFX Course" />
          </a>
        </div>
        <div>
          <a href="multimedia-course.php">
            <img className="img-fluid" src={image2} alt="Multimedia Course" />
          </a>
        </div>
        <div>
          <a href="game-design-course.php">
            <img className="img-fluid" src={image3} alt="Game Design Course" />
          </a>
        </div>
        <div>
          <a href="animation.php">
            <img className="img-fluid" src={image4} alt="3D Animation" />
          </a>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default ImageSlider;
