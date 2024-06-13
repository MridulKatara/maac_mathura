
import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>COURSES AT MAAC</h1>
      <p>Choose from specialized courses giving in-depth knowledge to learn skills that prepare you for a successful career in the professional Media and Entertainment industry</p>
      <div className="image-container">
        <img src="https://maacdelhi.com/img/home-ilus/erth-cl.png" alt="Earth" className="earth-image animated" />
        <img src="https://maacdelhi.com/img/courses-page-image/byo.png" alt="Boy on rocket" className="boy-image animated" />
        <img src="https://maacdelhi.com/img/courses-page-image/grl.png" alt="Girl on laptop" className="girl-image animated" />
      </div>
    </div>
  );
};

export default HomePage