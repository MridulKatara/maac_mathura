import React from "react";
import "./ShortTermSpecializedPage.css";

const ShortTermSpecializedPage = () => {
  return (
    <div>
      <div className="short-animation-page">
        <div className="short-content">
          <h1>SHORT-TERM COURSES</h1>
          <div className="short-details">
            <span>Duration - 24 Months</span>
            <span>Skill Level - Advanced</span>
          </div>
        </div>
        <div className="short-about-p">
          <p>
            MAAC Offers a bouquet of short term courses enabling students to
            kickstart their career with limited time or budget as their
            disposal. These short term courses also train the student to be job
            ready at the end of their training period.
          </p>
        </div>
      </div>

      <div className="design-viz-pro">
        <div className="design-content">
          <h2>DESIGN VIZ PRO</h2>
          <h6>
            Duration - 7 Months <span>Skill Level - Intermediate</span>
          </h6>
          <p>
            Design Viz Pro allows you to deep dive into design and
            visualization, from planning till execution. If you have strong
            visualization skills and love to play with the latest software, then
            this is the course for you. On successful completion of the
            animation course, you will be able to make a career in the animation
            industry, production houses, or architecture and engineering
            companies.
          </p>
        </div>
        <div className="software-covered">
          <h5>Software Covered</h5>
          <div className="software-icons">
            <div className="software-box">
              <img src="img/software-img1.png" alt="Adobe Photoshop" />
              <p>Adobe Photoshop</p>
            </div>
            <div className="software-box">
              <img src="img/software-img5.png" alt="Autodesk 3ds Max" />
              <p>Autodesk 3ds Max</p>
            </div>
            <div className="software-box">
              <img src="img/software-img14.png" alt="Unity" />
              <p>Unity</p>
            </div>
            <div className="software-box">
              <img src="img/software-img47.png" alt="Google Sketchup" />
              <p>Google Sketchup</p>
            </div>
            <div className="software-box">
              <img src="img/software-img44.png" alt="V-Ray" />
              <p>V-Ray</p>
            </div>
            <div className="software-box">
              <img src="img/software-img12.png" alt="Lumion" />
              <p>Lumion</p>
            </div>
            <div className="software-box">
              <img src="img/software-img3.png" alt="Adobe Premiere" />
              <p>Adobe Premiere</p>
            </div>
            <div className="software-box">
              <img src="img/software-img4.png" alt="Adobe Audition" />
              <p>Adobe Audition</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortTermSpecializedPage;
