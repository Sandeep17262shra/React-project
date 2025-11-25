import React from "react";
import "./chicago.css";
const chicago = () => {
  return (
    <div className="chicago-container">
      <div className="chicago-img-cont">
        <div className="chicago-left">
          <div className="chicago-lu">
            <img src="/images/chicago1.webp" alt="" />
          </div>
          <div className="chicago-lu">
            <img src="/images/chicago2.webp" alt="" />
          </div>
        </div>
        <div className="chicago-left">
          <img src="/images/chicago3.webp" alt="" />
        </div>
        <div className="chicago-hide">
          <img src="/images/chicago4.webp" alt="" />
        </div>
      </div>
      <div className="chicago-content">
        <h2>HANDMADE IN CHICAGO</h2>
        <p>
          We look forward to meeting you and catering to your Jewelry needs.
          Need to design your own? Let us help bring your idea to life.
        </p>
        <h4>Book An In-Store Appointment</h4>
        <div>
          <h5>Directions </h5>
          <img src="/images/chicago5.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default chicago;
