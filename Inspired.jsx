import React from "react";
import "./Inspired.css";
import DragScroll from "./DragScroll";
import "./dragScroll.css";
const Inspired = () => {
  return (
    <div className="inspired-container">
      <h2>GET INSPIRED</h2>
      <p>Discover engagement moments of our clients.</p>
      <div className="inspired-block">
        <div className="inspired-hidden">
          <div className="inspired-grid">
            <div className="ind-grid-card">
              <img src="/images/inspired12.webp" alt="" />
            </div>
            <div className="ind-grid-card">
              <img src="/images/inspired6.webp" alt="" />
            </div>
            <div className="ind-grid-card">
              <img src="/images/inspired7.webp" alt="" />
            </div>
            <div className="ind-grid-card">
              <img src="/images/inspired10.webp" alt="" />
            </div>
            <div className="ind-grid-card">
              <img src="/images/inspired13.webp" alt="" />
            </div>
            <div className="ind-grid-card">
              <img src="/images/inspired8.webp" alt="" />
            </div>
            <div className="ind-grid-card">
              <img src="/images/inspired9.webp" alt="" />
            </div>
            <div className="ind-grid-card">
              <img src="/images/inspired11.webp" alt="" />
            </div>
          </div>
          <div className="inspired-phone">
            <img className="ins-phone" src="/images/inspired15.webp" alt="" />
            <img src="/images/inspired14.webp" alt="" />
          </div>
        </div>
        <div className="inspired-follow">
          <div className="inspired-follow-cov">
            <img src="/images/inspired1.webp" alt="" />
          </div>
          <div className="inspired-follow-cov">
            <img src="/images/inspired2.webp" alt="" />
          </div>
          <div className="inspired-follow-cov">
            <img src="/images/inspired3.webp" alt="" />
          </div>
          <div className="inspired-follow-cov">
            <img src="/images/inspired4.webp" alt="" />
          </div>
          <div className="inspired-follow-cov">
            <img src="/images/inspired5.webp" alt="" />
          </div>
          <h4>FOLLOW US</h4>
        </div>
      </div>
      <div className="inspired-slide-cont">
        <DragScroll gap="20px" height="fit-content" sensitivity={2}>
          <div className="card-in">
            <img src="/images/inspired6.webp" alt="" />
          </div>
          <div className="card-in">
            <img src="/images/inspired7.webp" alt="" />
          </div>
          <div className="card-in">
            <img src="/images/inspired8.webp" alt="" />
          </div>
          <div className="card-in">
            <img src="/images/inspired9.webp" alt="" />
          </div>
          <div className="card-in">
            <img src="/images/inspired10.webp" alt="" />
          </div>
          <div className="card-in">
            <img src="/images/inspired11.webp" alt="" />
          </div>
        </DragScroll>
      </div>
    </div>
  );
};

export default Inspired;
