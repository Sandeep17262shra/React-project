import React from "react";
import "./CD.css";
const CD = () => {
  return (
    <div className="cd-container">
      <div className="cd-img">
        <img className="cd-image-show" src="/images/dc1.webp" alt="" />
        <img className="cd-image-hide" src="/images/dc2.webp" alt="" />
      </div>
      <div className="cd-content">
        <div className="cd-content1">
          <h2>DS CARE PLAN</h2>
          <h6>
            Starting at<span> $5</span>/ month
          </h6>
          <h4>THAT'S LESS THAN A CUP OF COFFEE!</h4>
          <h5></h5>
          <p>
            Dimend SCAASI jewelry includes a lifetime warranty. Add an extended
            plan for extra protection.
          </p>
        </div>
        <h3>LEARN MORE</h3>
      </div>
    </div>
  );
};

export default CD;
