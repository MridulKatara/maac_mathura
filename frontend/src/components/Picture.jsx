import React, { useState, useEffect } from 'react';
import '../styles/photo.css';

const Picture = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX / window.innerWidth - 0.5,
      y: event.clientY / window.innerHeight - 0.5,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="container">
      <div className="element element1">
        <img
          src="https://maacanimationkanpur.com/wp-content/uploads/2023/12/h1_circle.png"
          alt="Circle"
          style={{
            transform: `scale(${1.047 + 0.05 * mousePosition.y})`,
          }}
        />
      </div>
      <div className="element element2">
        <img
          src="https://maacanimationkanpur.com/wp-content/uploads/2024/01/h1_deco-5.png"
          alt="Deco 5"
          style={{
            transform: `translate(${9 * mousePosition.x}px, ${12 * mousePosition.y}px)`,
          }}
        />
      </div>
      <div className="element element3">
        <img
          src="https://maacanimationkanpur.com/wp-content/uploads/2024/05/vid-min.png"
          alt="Vid"
          style={{
            transform: `scale(${1.05 - 0.05 * mousePosition.y})`,
          }}
        />
      </div>
      <div className="element element4">
        <img
          src="https://maacanimationkanpur.com/wp-content/uploads/2024/01/h1_deco-4.png"
          alt="Deco 4"
          style={{
            transform: `
              translate(${16 * -mousePosition.x}px, ${21 * -mousePosition.y}px)
              rotateX(${9 * mousePosition.y}deg)
              rotateY(${7 * -mousePosition.x}deg)
            `,
          }}
        />
      </div>
      <div className="element element5">
        <img
          src="https://maacanimationkanpur.com/wp-content/uploads/2024/01/h1_deco-6.png"
          alt="Deco 6"
          style={{
            transform: `
              translate(${15 * mousePosition.x}px, ${19 * mousePosition.y}px)
              rotateX(${9 * mousePosition.y}deg)
              rotateY(${7 * -mousePosition.x}deg)
            `,
          }}
        />
      </div>
      <div className="element element6">
        <img
          src="https://maacanimationkanpur.com/wp-content/uploads/2024/01/h1_deco-3.png"
          alt="Deco 3"
          style={{
            transform: `translate(${7 * -mousePosition.x}px, ${9 * -mousePosition.y}px)`,
          }}
        />
      </div>
    </div>
  );
};

export default Picture;
