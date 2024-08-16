import "./explore.css";
import React from "react";
import cybertruck from "../../assets/cybertruck.jpg";
import modelx from "../../assets/modelx.jpg";
import modely from "../../assets/modely.jpg";

const Explore = () => {
  return (
    <div className="explore-section">
      <div className="model-x">
        <img src={modelx} className="explore-image" alt="Explore 1" />
      </div>
      <div className="model-y">
        <img src={modely} className="explore-image" alt="Explore 2" />
      </div>
      <div className="cybertruck">
        <img src={cybertruck} className="explore-image" alt="Explore 3" />
      </div>
    </div>
  );
};

export default Explore;
