// src/components/HomepageContent.jsx
import React from 'react';
// import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/HomePage.css';

import EnquiryForm from './EnquiryForm';
import ImageSlider from './ImageSlider';

import company1 from '../images/company1.png';
import company2 from '../images/company2.png';
import company3 from '../images/company3.png';
import company4 from '../images/company4.png';
import company5 from '../images/company5.png';
import company6 from '../images/company6.png';

import video1 from '../videos/video1.mp4';
import video2 from '../videos/video2.mp4';
import video3 from '../videos/video3.mp4';
import video4 from '../videos/video4.mp4';
import video5 from '../videos/video5.mp4';
import video6 from '../videos/video6.mp4';

import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
// import img3 from '../images/img3.png';
// import img4 from '../images/img4.png';
// import img5 from '../images/img5.png';
// import img6 from '../images/img6.png';

const Home = () => {

  const steps = [
    {
      title: 'Enquire',
      description: 'About Courses, Fees, Duration, Career opportunities',
      imgSrc: 'images/img1.png',
      imgAlt: 'Enquire',
    },
    {
      title: 'Enroll',
      description: 'Hurray! You are a student at maac!',
      imgSrc: 'images/img2.png',
      imgAlt: 'Enroll',
    },
    {
      title: 'Attend',
      description: 'Regular classes and practice with the best trainers in delhi',
      imgSrc: 'images/img3.png',
      imgAlt: 'Attend',
    },
    {
      title: 'Participate',
      description: 'In Seminars, Workshops, Events, Competitions',
      imgSrc: 'images/img4.png',
      imgAlt: 'Participate',
    },
    {
      title: 'Submit',
      description: 'Student works and show reel',
      imgSrc: 'images/img5.png',
      imgAlt: 'Submit',
    },
    {
      title: 'Prepare',
      description: 'Get ready for placements with top companies',
      imgSrc: 'images/img6.png',
      imgAlt: 'Prepare',
    },
  ];

  return (
    <div className="home-page">
      <div className="image-slider-container">
        <ImageSlider />
      </div>
      <div className="main-content">
      <div className="form-container">
        <EnquiryForm />
      </div>
      </div>
      <div className='bg1'>
      <h2 className="centered-text">About MAAC</h2>
        <h4 className="about-maac" >MAAC is the high-end 3D Animation & VFX education vertical of Aptech Ltd.</h4>
        <p className='row1'>
          Through its wide network of centres, MAAC has prepared thousands of students 
          for careers in Animation, VFX, Filmmaking, Gaming, Web and Graphics Designing. 
          MAAC institutes provide quality education through internationally recognised career 
          courses leading to top-notch job placements. MAAC has a dedicated Research & Development 
          team consisting of industry professionals.
        </p>
        <p className='row1'>
          MAAC Institute Agra conduct faculty training programs to ensure high standards of teaching in the classroom.
          All MAAC teachers are trained and vetted by Animation industry professionals who help sharpen their
          creative & technical skills. MAAC in Agra lays strong emphasis on using the best infrastructure to train
          students. Our MAAC institutes use high-end computers, Wacom tablets & other equipment in the classroom. 
          The infrastructure is similar to that used in the global colleges training in Animation & VFX. 
          This helps create an 'on-the-job' environment in the design classes at MAAC. As a result, MAAC 
          students win many Awards for the films they create during and after successfully completing their 
          design courses.
        </p>
      </div>
      <div className="placements">
        <h2>Companies that our students get placements in</h2>
        <p>Through expert career training and mentorship, our students start their careers at major companies across the globe</p>
        <div className="companies">
          <img src={company1} alt="Technicolor" />
          <img src={company2} alt="MPC" />
          <img src={company3} alt="DNEG" />
          <img src={company4} alt="Prime Focus" />
          <img src={company5} alt="Netflix" />
          <img src={company6} alt="Red Chillies" />
        </div>
      </div>
      <div className="courses-det-bx">
        <div className="row mx-0">
          <div className="col-12 col-sm-6 col-md-4 p-2">
            <div className="courses-img-bx">
              <video className="cprog-img bg-video-h" autoPlay loop muted playsInline>
                <source src={video1} type="video/mp4" />
              </video>
              <div className="courses-cont-bx">
                <h2>3D Animation Courses</h2>
                <span>
                  <p>Learn animation with the top animation courses at MAAC. Discover animation courses fees and more details about animation related courses.</p>
                  {/* <a href="ad3d-edge-plus"></a> */}
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 p-2">
            <div className="courses-img-bx">
              <video className="cprog-img bg-video-h" autoPlay loop muted playsInline>
                <source src={video2} type="video/mp4" />
              </video>
              <div className="courses-cont-bx">
                <h2>VFX Courses</h2>
                <span>
                  <p>Join a VFX course that covers VFX animation and Learn 3d VFX at MAAC. Know VFX course fees and more details about VFX training.</p>
                  {/* <a href="advfx-plus"></a> */}
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 p-2">
            <div className="courses-img-bx">
              <video className="cprog-img bg-video-h" autoPlay loop muted playsInline>
                <source src={video3} type="video/mp4" />
              </video>
              <div className="courses-cont-bx">
                <h2>Gaming Courses</h2>
                <span>
                  <p>Explore Game Design Courses at MAAC. Get details about game designing programs’ course fees and more about gaming courses.</p>
                  {/* <a href="adidg"></a> */}
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 p-2">
            <div className="courses-img-bx">
              <video className="cprog-img bg-video-h" autoPlay loop muted playsInline>
                <source src={video4} type="video/mp4" />
              </video>
              <div className="courses-cont-bx">
                <h2>Web & Graphic Design Courses</h2>
                <span>
                  <p>See all graphic design courses in Delhi & web designing programs. Options to learn graphic designing in Delhi and related courses fees details.</p>
                  {/* <a href="apdmd"></a> */}
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 p-2">
            <div className="courses-img-bx">
              <video className="cprog-img bg-video-h" autoPlay loop muted playsInline>
                <source src={video5} type="video/mp4" />
              </video>
              <div className="courses-cont-bx">
                <h2>More Career Courses</h2>
                <span>
                  <p>Pick out from various digital animation programs at MAAC. Learn about Animation VFX Gaming and other design courses at MAAC Institutes in Delhi.</p>
                  {/* <a href="career-courses"></a> */}
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 p-2">
            <div className="courses-img-bx">
              <video className="cprog-img bg-video-h" autoPlay loop muted playsInline>
                <source src={video6} type="video/mp4" />
              </video>
              <div className="courses-cont-bx">
                <h2>Short Term Courses</h2>
                <span>
                  <p>Choose from MAAC courses focussed on specific learning goals in mind for professionals looking to Upskill or add to their skill set.</p>
                  {/* <a href="short-term-courses"></a> */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="how-it-text w-100 text-center wow slideInLeft" data-wow-duration="1.5s">
            <h2 className="ho-bg">How it works</h2>
          </div>
        </div>
        {steps.map((step, index) => (
          <div
            className={`row align-items-center justify-content-center ${index % 2 !== 0 ? 'py-lg-5 rev-row' : ''}`}
            key={index}
          >
            {index % 2 === 0 ? (
              <>
                <div className="col-12 col-sm-6 col-lg-5 col-xl-4">
                  <div className={`tx tx${index + 1} text-md-end`}>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-5 col-xl-4">
                  <img src={img1} alt={step.imgAlt} loading="lazy" />
                </div>
              </>
            ) : (
              <>
                <div className="col-12 col-sm-6 col-lg-5 col-xl-4">
                  <img src={img2} alt={step.imgAlt} loading="lazy" />
                </div>
                <div className="col-12 col-sm-6 col-lg-5 col-xl-4">
                  <div className={`tx txr tx${index + 1}`}>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
