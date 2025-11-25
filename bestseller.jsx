import React from "react";
import "./bestseller.css";

const bestseller = () => {
  return (
    <div className="bestseller_container">
      <div className="bestseller_container_img">
        <div className="best_cont_img">
          <img src="/images/bestseller1.webp" alt="" />
        </div>
        <div className="best_cont_img">
          <img src="/images/bestseller2.webp" alt="" />
        </div>
      </div>
      <div className="bestseller_container_img2">
        <h2>BEST SELLERS</h2>
        <div className="bst_cont_b">
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default bestseller;
