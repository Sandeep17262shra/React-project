import React from "react";
import DragScroll2 from "./DragScroll2";
import "./dragScroll2.css";
import "./colorD.css";

export default function Demo() {
  return (
    <div className="sb-dia-container">
      <h2>SHOP BY DIAMOND SHAPE</h2>
      <DragScroll2 gap="50px" height="fit-content" sensitivity={2}>
        <div className="card1">
          <h3>Yellow</h3>
          <img src="/images/cd1.webp" alt="" />
        </div>
        <div className="card1">
          <h3>Pink</h3>
          <img src="/images/cd2.webp" alt="" />
        </div>
        <div className="card1">
          <h3>Purple</h3>
          <img src="/images/cd3.webp" alt="" />
        </div>
        <div className="card1">
          <h3>Red</h3>
          <img src="/images/cd4.webp" alt="" />
        </div>
        <div className="card1">
          <h3>Blue</h3>
          <img src="/images/cd5.webp" alt="" />
        </div>
        <div className="card1">
          <h3>Green</h3>
          <img src="/images/cd6.webp" alt="" />
        </div>
        <div className="card1">
          <h3>Orange</h3>
          <img src="/images/cd7.webp" alt="" />
        </div>
        <div className="card1">
          <h3>Brown</h3>
          <img src="/images/cd8.webp" alt="" />
        </div>
        <div className="card1">
          <h3>Black</h3>
          <img src="/images/cd9.webp" alt="" />
        </div>
        <div className="card1">
          <h3>Gray</h3>
          <img src="/images/cd10.webp" alt="" />
        </div>
      </DragScroll2>
    </div>
  );
}
