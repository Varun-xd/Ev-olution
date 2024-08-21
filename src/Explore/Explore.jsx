import "./Explore.css";
import React from "react";
import cybertruck from "../../assets/cybertruck.jpg";
import modelx from "../../assets/modelx.jpg";
import modely from "../../assets/modely.jpg";
import cybertruckfont from "../../assets/cybertruckfont.png";
const Explore = () => {
  return (
    <div className="explore-section">
      <img src={modelx} className="explore-image" alt="Explore 1" />
      <div className="explore-item">
        <div className="overlay-text">
          <h1>Model X</h1>
          <p className="details">
            <u>1.99% APR Financing Ending August 31</u>
          </p>
          <p className="price">From $31,490</p>
        </div>
      </div>
      <img src={modely} className="explore-image" alt="Explore 2" />
      <div className="explore-item">
        <div className="overlay-text">
          <h1>Model Y</h1>
          <p className="details">
            <u>From $65,990</u>
          </p>
          <p className="price">
            After Federal Tax Credit $7,500 and Est. Gas Savings $6,500
          </p>
        </div>
      </div>
      <img src={cybertruck} className="explore-image" alt="Explore 3" />
      <div className="explore-item">
        <div className="overlay-text">
          <img src={cybertruckfont} className="vector-overlay" alt="Overlay" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
