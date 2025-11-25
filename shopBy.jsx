import React from "react";
import DragScroll from "./DragScroll";
import "./dragScroll.css";
import "./shopBy.css";

export default function Demo() {
  return (
    <div className="shop-by-container">
      <h2>SHOP BY MATERIAL</h2>
      <DragScroll gap="15px" height="fit-content" sensitivity={1.5}>
        <div className="by-card">
          <div className="by-card-img">
            <img src="/images/shop_by_image1.webp" alt="" />
          </div>
          <h3>YELLOW GOLD</h3>
        </div>
        <div className="by-card">
          <div className="by-card-img">
            <img src="/images/shop_by_image2.webp" alt="" />
          </div>
          <h3> WHITE GOLD</h3>
        </div>
        <div className="by-card">
          <div className="by-card-img">
            <img src="/images/shop_by_image3.webp" alt="" />
          </div>
          <h3>ROSE GOLD</h3>
        </div>
        <div className="by-card">
          <div className="by-card-img">
            <img src="/images/shop_by_image4.webp" alt="" />
          </div>
          <h3>PLATINUM</h3>
        </div>
        <div className="by-card">
          <div className="by-card-img">
            <img src="/images/shop_by_image5.webp" alt="" />
          </div>
          <h3>TANTALUM</h3>
        </div>
        <div className="by-card">
          <div className="by-card-img">
            <img src="/images/shop_by_image6.webp" alt="" />
          </div>
          <h3>CARBON FIBER</h3>
        </div>
      </DragScroll>
    </div>
  );
}
