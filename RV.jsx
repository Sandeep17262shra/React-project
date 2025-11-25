import React from "react";
import "./RV.css";
const RV = () => {
  return (
    <div className="rv-container">
      <div className="rv-image">
        <div className="rv-img-grid">
          <div>
            <img src="/images/rv1.webp" alt="" />
          </div>
          <div>
            <img src="/images/rv2.webp" alt="" />
          </div>
          <div>
            <img src="/images/rv3.webp" alt="" />
          </div>
          <div>
            <img src="/images/rv4.webp" alt="" />
          </div>
        </div>
        <div className="rv-hide-image">
          <img src="/images/rv13.webp" alt="" />
        </div>
      </div>
      <div className="rv-content">
        <div className="rv1">
          <div className="y25">
            <img src="/images/rv5.webp" alt="" />
            <p>YEARS TRUST</p>
          </div>
          <div className="sec-2500">
            <h4>1200+</h4>
            <div>
              <img src="/images/rv6.webp" alt="" />
              <h5>REVIEWS</h5>
            </div>
          </div>
        </div>
        <div className="rv-see-all">
          <div>
            <img src="/images/rv7.webp" alt="" />
          </div>
          <div>
            <img src="/images/rv8.webp" alt="" />
          </div>
          <div>
            <img src="/images/rv9.webp" alt="" />
          </div>
          <div>
            <img src="/images/rv10.webp" alt="" />
          </div>
          <div>
            <img src="/images/rv11.webp" alt="" />
          </div>
          <div className="see-all">
            <h5>SEEALL</h5>
            <p></p>
          </div>
        </div>
        <p>
          Our jewelry brand stands as a testament to the trust of our customers,
          showcasing excellence.
        </p>
        <div className="y25 rv-hide25">
          <img src="/images/rv5.webp" alt="" />
          <p>YEARS TRUST</p>
        </div>
        <div className="rv-brand">
          <img src="/images/rv12.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default RV;
