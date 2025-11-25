import React from "react";
import { useState } from "react";

import "./footer.css";

const footer = () => {
  const [footIndex, setFootIndex] = useState(0);
  const [footIndex1, setFootIndex1] = useState(0);
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="foot-top-left">
          <img className="ftp-img" src="/images/logo.webp" alt="" />
          <div className="foot-small-soc">
            <div>
              <img src="/images/foot1.webp" alt="" />
            </div>
            <div>
              <img src="/images/foot2.webp" alt="" />
            </div>
            <div>
              <img src="/images/foot3.webp" alt="" />
            </div>
            <div>
              <img src="/images/foot4.webp" alt="" />
            </div>
            <div>
              <img src="/images/foot5.webp" alt="" />
            </div>
            <div>
              <img src="/images/foot6.webp" alt="" />
            </div>
          </div>
        </div>
        <div className="foot-top-right">
          <div
            className="foot-top-right-block"
            onClick={() => setFootIndex(footIndex ^ 1)}
          >
            <h3>CUSTOMER CARE</h3>
            <p
              className={`${
                footIndex === 1 ? "footer-arrow-up" : "footer-arrow-down"
              }`}
            ></p>
            <div
              className={`${footIndex === 1 ? "footer-show" : "footer-hide"}`}
            >
              <h5>Live Chat</h5>
              <h5>Book Appointment</h5>
              <h5>1-888-592-1700</h5>
              <h5>sales@dscaasi.com</h5>
              <h5>Contact Us</h5>
              <h5>FAQs</h5>
              <h5>Ring Size Chart</h5>
              <h5>DS Care Service Plan</h5>
            </div>
          </div>
          <div
            className="foot-top-right-block"
            onClick={() => setFootIndex(footIndex ^ 2)}
          >
            <h3>ABOUT dimend SCAASI</h3>
            <p
              className={`${
                footIndex === 2 ? "footer-arrow-up" : "footer-arrow-down"
              }`}
            ></p>
            <div
              className={`${footIndex === 2 ? "footer-show" : "footer-hide"}`}
            >
              <h5>Our Story</h5>
              <h5>Our Showroom</h5>
              <h5>Reviews</h5>
              <h5>Blog</h5>
              <h5>Lab Grown Diamonds</h5>
              <h5>Diamond Buying Guide</h5>
            </div>
          </div>
          <div
            className="foot-top-right-block"
            onClick={() => setFootIndex(footIndex ^ 3)}
          >
            <h3>WHY dimend SCAASI</h3>
            <p
              className={`${
                footIndex === 3 ? "footer-arrow-up" : "footer-arrow-down"
              }`}
            ></p>
            <div
              className={`${footIndex === 3 ? "footer-show" : "footer-hide"}`}
            >
              <h5>Returns Are Free</h5>
              <h5>Conflict Free Diamonds</h5>
              <h5>Diamond Upgrade Program</h5>
              <h5>Financing And Free Shipping</h5>
              <h5>Delivery & Returns</h5>
              <h5>Jewelry Maintenance</h5>
              <h5>Luxury Watches</h5>
              <h5>Gemstones</h5>
            </div>
          </div>
          <div
            className="foot-top-right-block"
            onClick={() => setFootIndex(footIndex ^ 4)}
          >
            <h3>DIAMOND SHAPES</h3>
            <p
              className={`${
                footIndex === 4 ? "footer-arrow-up" : "footer-arrow-down"
              }`}
            ></p>
            <div
              className={`${footIndex === 4 ? "footer-show" : "footer-hide"}`}
            >
              <h5>Old Miner</h5>
              <h5>European</h5>
              <h5>Round</h5>
              <h5>Princess</h5>
              <h5>Marquise</h5>
              <h5>Cushion</h5>
              <h5>Oval</h5>
              <h5>Emerald</h5>
              <h5>Radiant</h5>
              <h5>Pear</h5>
              <h5>Asscher</h5>
              <h5>Heart</h5>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer-below"
        onClick={() => setFootIndex1(footIndex1 ^ 1)}
      >
        <h3>PARTNERS & ASSOCIALTIONS</h3>
        <div
          className={`footer-below-left ${
            footIndex1 === 1 ? "footer-below-left-show" : "footer-below-left"
          }`}
        >
          <div>
            <img src="/images/foot7.webp" alt="" />
          </div>
          <div>
            <img src="/images/foot8.webp" alt="" />
          </div>
          <div>
            <img className="foot-img-sp" src="/images/foot9.webp" alt="" />
          </div>
        </div>
        <div
          className={`footer-below-right ${
            footIndex1 === 1 ? "footer-below-right-show" : "footer-below-right"
          }`}
        >
          <div>
            <img src="/images/foot10.webp" alt="" />
          </div>
          <div>
            <img src="/images/foot11.webp" alt="" />
          </div>
          <div>
            <img src="/images/foot12.webp" alt="" />
          </div>
          <div>
            <img src="/images/foot13.webp" alt="" />
          </div>
          <div>
            <img src="/images/foot14.webp" alt="" />
          </div>
          <div>
            <img src="/images/foot15.webp" alt="" />
          </div>
        </div>
      </div>
      <div className="footer-end">
        <p>© 1996-2024 dimend SCAASI Jewelers. All Rights Reserved</p>
        <div>
          <p>Privacy Policy</p>
          <p>Term of Use</p>
          <p>Site Map</p>
        </div>
      </div>
    </div>
  );
};

export default footer;
