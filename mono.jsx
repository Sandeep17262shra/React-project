import React from "react";
import DragScroll from "./DragScroll";
import "./dragScroll.css";
import "./mono.css";

const mono = () => {
  return (
    <div className="mono_container">
      <DragScroll gap="15px" height="fit-content" sensitivity={2}>
        <div className="card2">
          <div className="card2_img_cont">
            <div className="card2_img">
              <img src="/images/mono21.webp" alt="" />
            </div>
            <div className="card2_img card2_img1">
              <img src="/images/mono11.webp" alt="" />
            </div>
          </div>
          <div className="card2_content">
            <h3>MONROE CATHEDRAL</h3>
            <p>STARTING AT $2,100</p>
          </div>
        </div>
        <div className="card2">
          <div className="card2_img_cont">
            <div className="card2_img">
              <img src="/images/mono22.webp" alt="" />
            </div>
            <div className="card2_img">
              <img src="/images/mono12.webp" alt="" />
            </div>
          </div>
          <div className="card2_content">
            <h3>HOOP EARRING</h3>
            <p>STARTING AT $190</p>
          </div>
        </div>
        <div className="card2">
          <div className="card2_img_cont">
            <div className="card2_img">
              <img src="/images/mono23.webp" alt="" />
            </div>
            <div className="card2_img">
              <img src="/images/mono13.webp" alt="" />
            </div>
          </div>
          <div className="card2_content">
            <h3>TENNIS NECKLACE</h3>
            <p>STARTING AT $16,500</p>
          </div>
        </div>
        <div className="card2">
          <div className="card2_img_cont">
            <div className="card2_img">
              <img src="/images/mono24.webp" alt="" />
            </div>
            <div className="card2_img">
              <img src="/images/mono14.webp" alt="" />
            </div>
          </div>
          <div className="card2_content">
            <h3>JOY PAVE</h3>
            <p>STARTING AT $1,300</p>
          </div>
        </div>
        <div className="card2">
          <div className="card2_img_cont">
            <div className="card2_img">
              <img src="/images/mono25.webp" alt="" />
            </div>
            <div className="card2_img">
              <img src="/images/mono15.webp" alt="" />
            </div>
          </div>
          <div className="card2_content">
            <h3>TORI BAND</h3>
            <p>STARTING AT $2,100</p>
          </div>
        </div>
        <div className="card2">
          <div className="card2_img_cont">
            <div className="card2_img">
              <img src="/images/mono27.webp" alt="" />
            </div>
            <div className="card2_img">
              <img src="/images/mono16.webp" alt="" />
            </div>
          </div>
          <div className="card2_content">
            <h3>LADY LUXE RING</h3>
            <p>STARTING AT $2,800</p>
          </div>
        </div>
      </DragScroll>
    </div>
  );
};

export default mono;
