import React from "react";
import { useState } from "react";
import "./madeTo.css";

const madeTo = () => {
  const [index, setIndex] = useState(1);
  const [smallIndex, setSmallIndex] = useState(0);

  const next = () => {
    if (index <= 3 - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 1) setIndex(index - 1);
  };
  return (
    <div className="made-to-container">
      <div className="made-to-cont">
        <div className="made-to-cont-img">
          <div className="mtc-img">
            <img src="/images/made_to_image1.webp" alt="" />
          </div>
          <div className="mtc-img">
            <img src="/images/made_to_image2.webp" alt="" />
          </div>
          <div className="mtc-img-hide">
            <img src="/images/made3.webp" alt="" />
          </div>
        </div>
        <div className="made-to-cont-content">
          <h4>FROM A DREAM TO REALITY</h4>
          <div className={`${index === 1 ? "mtc-s" : "mts-h"}`}>
            <div
              className="small-mts"
              onClick={() => setSmallIndex(smallIndex ^ 1)}
            >
              <h2>MADE TO ORDER</h2>
              <p></p>
            </div>
            <div
              className={`${smallIndex === 1 ? "small-mtc-s" : "small-mts-h"}`}
            >
              <p>
                Tailored to your preferences, each piece is crafted with
                precision, ensuring a unique experience tailored for you.
              </p>
              <h5>Book A Virtual Appointment</h5>
            </div>
          </div>
          <div className={`${index === 2 ? "mtc-s" : "mts-h"}`}>
            <div
              className="small-mts"
              onClick={() => setSmallIndex(smallIndex ^ 2)}
            >
              <h2>MADE RESPONSIBLE</h2>
              <p></p>
            </div>
            <div
              className={`${smallIndex === 2 ? "small-mtc-s" : "small-mts-h"}`}
            >
              <p>
                Our Jewelry is made responsibly, reflecting our commitment to
                ethical sourcing sustainable practices
              </p>
              <h5>Conflict Free Diamonds</h5>
            </div>
          </div>
          <div className={`${index === 3 ? "mtc-s" : "mts-h"}`}>
            <div
              className="small-mts"
              onClick={() => setSmallIndex(smallIndex ^ 3)}
            >
              <h2>MADE TO LAST</h2>
              <p></p>
            </div>
            <div
              className={`${smallIndex === 3 ? "small-mtc-s" : "small-mts-h"}`}
            >
              <p>
                Crafted to stand the test of the, our jewelry is made tp last,
                Meticulously and crafted with prevision.
              </p>
              <h5>Design, Fabrication And Materials</h5>
            </div>
          </div>
          <div className="button-box">
            <div className="button-box-cover1" onClick={prev}>
              <p></p>
            </div>
            <div className="button-box-cover2" onClick={next}>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default madeTo;
