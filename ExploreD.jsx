import React from "react";
import { useState } from "react";
import DragScroll from "./DragScroll";
import "./dragScroll.css";
import "./ExploreD.css";

export default function Demo() {
  const [hoverIndex, setHoverIndex] = useState(0);
  return (
    <div className="explore-container">
      <h2>EXPLORE dimend SCAASI</h2>
      <DragScroll gap="20px" height="fit-content" sensitivity={2}>
        <div className="card">
          <img src="/images/explore_image1.webp" alt="" />
          <h3>ENGAGEMENT RINGS</h3>
        </div>
        <div className="card">
          <img src="/images/explore_image2.webp" alt="" />
          <h3>WEDDING RINGS</h3>
        </div>
        <div className="card">
          <img src="/images/explore_image3.webp" alt="" />
          <h3>DIAMONDS</h3>
        </div>
        <div className="card">
          <img src="/images/explore_image4.webp" alt="" />
          <h3>WATCHES</h3>
        </div>
        <div className="card">
          <img src="/images/explore_image5.webp" alt="" />
          <h3>GEM STONE</h3>
        </div>
        <div className="card">
          <img src="/images/explore_image6.webp" alt="" />
          <h3>FINE JEWELRY</h3>
        </div>
      </DragScroll>

      <div className="explore-cont2">
        <div className="ex-cont">
          <img src="/images/explore_image7.webp" alt="" />
          <h3 onClick={() => setHoverIndex(hoverIndex ^ 1)}>
            30-Day Returns Policy
          </h3>
          <h4
            className={` explore-arrow ${
              hoverIndex === 1 ? "ex-up" : "ex-down"
            }`}
          ></h4>
          <p className={`${hoverIndex === 1 ? "show2" : "hide2"}`}>
            Return your purchase within a reasonable timeframe if you are not
            completely satisfied.
          </p>
        </div>
        <div className="ex-cont">
          <img src="/images/explore_image8.webp" alt="" />
          <h3 onClick={() => setHoverIndex(hoverIndex ^ 2)}>
            Lifetime Warranty
          </h3>
          <h4
            className={` explore-arrow ${
              hoverIndex === 2 ? "ex-up" : "ex-down"
            }`}
          ></h4>
          <p className={`${hoverIndex === 2 ? "show2" : "hide2"}`}>
            We ensure your cherished pieces last a lifetime without defects or
            malfunctions.
          </p>
        </div>
        <div className="ex-cont">
          <img src="/images/explore_image9.webp" alt="" />
          <h3 onClick={() => setHoverIndex(hoverIndex ^ 3)}>
            Expedited DELIVERY
          </h3>
          <h4
            className={` explore-arrow ${
              hoverIndex === 3 ? "ex-up" : "ex-down"
            }`}
          ></h4>
          <p className={`${hoverIndex === 3 ? "show2" : "hide2"}`}>
            Our 10-Day Delivery Engagement Rings - fast-tracking love to your
            doorstep.
          </p>
        </div>
        <div className="ex-cont">
          <img src="/images/explore_image10.webp" alt="" />
          <h3 onClick={() => setHoverIndex(hoverIndex ^ 4)}>
            Free US Shipping
          </h3>
          <h4
            className={` explore-arrow ${
              hoverIndex === 4 ? "ex-up" : "ex-down"
            }`}
          ></h4>
          <p className={`${hoverIndex === 4 ? "show2" : "hide2"}`}>
            Enjoy stress-free shopping with our free US shipping on all jewelry
            products.
          </p>
        </div>
      </div>
    </div>
  );
}
