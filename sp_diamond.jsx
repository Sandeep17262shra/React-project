import React from "react";
import DragScroll2 from "./DragScroll2";
import "./dragScroll2.css";
import "./sp_diamond.css";

export default function Demo() {
  return (
    <div className="sb-dia-container">
      <h2>SHOP BY DIAMOND SHAPE</h2>
      <DragScroll2 gap="31px" height="100px" sensitivity={2}>
        <div className="card1">
          <h3>Marquise</h3>
          <img src="/images/sb_dia_image1.webp" alt="" />
        </div>
        <div className="card1">
          <h3>Radiant</h3>
          <img src="/images/sb_dia_image2.webp" alt="" />
        </div>
        <div className="card1">
          <h3>Pear</h3>
          <img src="/images/sb_dia_image3.webp" alt="" />
        </div>
        <div className="card1">
          <h3>Cushion</h3>
          <img src="/images/sb_dia_image4.webp" alt="" />
        </div>
        <div className="card1">
          <h3>European</h3>
          <img src="/images/sb_dia_image5.webp" alt="" />
        </div>
        <div className="card1">
          <h3>Round</h3>
          <img src="/images/sb_dia_image6.webp" alt="" />
        </div>
        <div className="card1">
          <h3>Oval</h3>
          <img src="/images/sb_dia_image7.webp" alt="" />
        </div>
        <div className="card1">
          <h3>Old Miner</h3>
          <img src="/images/sb_dia_image8.webp" alt="" />
        </div>
        <div className="card1">
          <h3>Princess</h3>
          <img src="/images/sb_dia_image9.webp" alt="" />
        </div>
        <div className="card1">
          <h3>Emerald</h3>
          <img src="/images/sb_dia_image10.webp" alt="" />
        </div>
        <div className="card1">
          <h3>Asscher</h3>
          <img src="/images/sb_dia_image11.webp" alt="" />
        </div>
        <div className="card1">
          <h3>Heart</h3>
          <img src="/images/sb_dia_image12.webp" alt="" />
        </div>
      </DragScroll2>
    </div>
  );
}
