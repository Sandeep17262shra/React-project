import React from "react";
import DragScroll3 from "./DragScroll3";
import "./dragScroll3.css";
import "./HT.css";
const HT = () => {
  return (
    <div className="ht-container">
      <h2>HEARTFELT TESTIMONIALS</h2>
      <DragScroll3 gap="20px" height="fit-content" sensitivity={2}>
        <div className="ht-card">
          <img src="/images/ht1.webp" alt="" />
          <div className="ht-img-cont">
            <div className="ht-img-name">
              <div>
                <h4>Amanda Star</h4>
                <img src="/images/star.webp" alt="" />
              </div>
              <img src="/images/ht5.webp" alt="" />
            </div>
            <p>
              We had a wonderful experience at Dimend SCAASI! Susan and Issac
              were both so patient and responsive throughout the entire
              engagement ring selection process.
            </p>
          </div>
        </div>
        <div className="ht-card">
          <img src="/images/ht2.webp" alt="" />
          <div className="ht-img-cont">
            <div className="ht-img-name">
              <div>
                <h4>Bree Langer</h4>
                <img src="/images/star.webp" alt="" />
              </div>
              <img src="/images/ht5.webp" alt="" />
            </div>
            <p>
              Thank you go Isaac and the dimend SCAASI team for the engagement
              ring of my dreams!!{" "}
            </p>
          </div>
        </div>
        <div className="ht-card">
          <img src="/images/ht3.webp" alt="" />
          <div className="ht-img-cont">
            <div className="ht-img-name">
              <div>
                <h4>Jess Siebener</h4>
                <img src="/images/star.webp" alt="" />
              </div>
              <img src="/images/ht5.webp" alt="" />
            </div>
            <p>
              I had an absolutely incredible experience at dimend SCAASI! My
              fiancé found my dream engagement ring at this store, and we later
              returned to find my wedding band.
            </p>
          </div>
        </div>
        <div className="ht-card">
          <img src="/images/ht4.webp" alt="" />
          <div className="ht-img-cont">
            <div className="ht-img-name">
              <div>
                <h4>Izzy Lucereo</h4>
                <img src="/images/star.webp" alt="" />
              </div>
              <img src="/images/ht5.webp" alt="" />
            </div>
            <p>
              We loved our experience working with Isaac. Isaac made sure the
              engagement ring was exactly what my fiancée was looking for while
              making sure it fit our budget without sacrificing quality.
            </p>
          </div>
        </div>
      </DragScroll3>
    </div>
  );
};

export default HT;
