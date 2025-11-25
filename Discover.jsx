import React from "react";
import "./Discover.css";
const Discover = () => {
  return (
    <div className="discover_container">
      <div className="discover_cont1">
        <img src="images/discover.gif" alt="" />
      </div>
      <div className="discover_cont">
        <div className="dis-cont1">
          <p>Up to 40% off jewelry, 25% off ring settings</p>
          <h2>DISCOVER YOUR SPARKLE</h2>
        </div>
        <div className="dis-cont2">
          <h3 className="dis-cont2-sp0">SHOP ENGAGEMENT RINGS</h3>
          <h4 className="dis-cont2-sp">SHOP JEWELRY</h4>
        </div>
      </div>
    </div>
  );
};

export default Discover;
