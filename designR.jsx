import React from "react";
import { useState } from "react";
import "./designR.css";
const designR = () => {
  const [isHover, setHover] = useState(null);
  return (
    <div className="designR_container">
      <div className="designR_img">
        <img src="/images/designR.webp" alt="" />
      </div>
      <div className="designR_img design-2">
        <img src="/images/designR2.webp" alt="" />
      </div>
      <div className="designR_content">
        <h3>DESIGN YOUR OWN RING</h3>
        <p>
          With a commitment to both sustainability and tradition, we offer
          adiverse selection of lab and mined diamonds Chicago customers can
          choose from with confidence.
        </p>
        <div className="dsr-c">
          <h4>START WITH A SETTING</h4>
          <div
            className="dsr-p"
            onMouseEnter={() => setHover(0)}
            onMouseLeave={() => setHover(null)}
          >
            <h4>START WITH DIAMOND</h4>
            <p className={`${isHover === 0 ? "rotate-p" : "rotate-k"}`}></p>
          </div>
          <div className={`${isHover === 0 ? "dsr-d" : "dsr-h"}`}>
            <h3>LAB</h3>
            <h3>NATURAL</h3>
            <h3>LAB COLORED</h3>
          </div>
        </div>
      </div>
      <div className="designR_img design-2">
        <img src="/images/designR3.webp" alt="" />
      </div>
    </div>
  );
};

export default designR;
