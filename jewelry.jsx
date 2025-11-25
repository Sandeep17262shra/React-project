import React from "react";
import DragScroll from "./DragScroll";
import "./dragScroll.css";
import "./jewelry.css";

export default function Demo() {
  return (
    <div className="jewelry-container">
      <h2>JEWELRY FOR ALL OCCASIONS</h2>
      <DragScroll gap="20px" height="fit-content" sensitivity={2}>
        <div className="card">
          <img src="/images/jewelry_image1.webp" alt="" />
          <h3>GOLD CHAINS</h3>
        </div>
        <div className="card">
          <img src="/images/jewelry_image2.webp" alt="" />
          <h3>EARRINGS</h3>
        </div>
        <div className="card">
          <img src="/images/jewelry_image3.webp" alt="" />
          <h3>BRACELETS</h3>
        </div>
        <div className="card">
          <img src="/images/jewelry_image4.webp" alt="" />
          <h3>NECKLACES & PENDANTS</h3>
        </div>
        <div className="card">
          <img src="/images/jewelry_image5.webp" alt="" />
          <h3>STUDS</h3>
        </div>
      </DragScroll>
    </div>
  );
}
