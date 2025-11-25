import { useState } from "react";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    <>
      <div className="navbar-container">
        <div className="navbar1">
          <div className="navbar1-b">
            <div className="navbar11">
              <p>5.0</p>
              <img src="/images/star.webp" alt="star" />
              <p>1200+ Reviews</p>
            </div>
            <div className="navbar12">
              <p>
                Our Biggest Sale of the Year. <span>Sign up </span> for details.
              </p>
            </div>
            <div className="navbar13">
              <img src="/images/ff.webp" alt="" />
              <p>11,300+ Followers</p>
              <img src="/images/check.webp" alt="" />
            </div>
          </div>
        </div>
        <div className="navbar2">
          <div className="navbar21">
            <div className="navbar211">
              <img src="/images/calendar.webp" alt="calender" />
              <p>BOOK APPOINTMENT</p>
            </div>
            <div className="navbar212">
              <img src="/images/location.webp" alt="location" />
              <p>STORE</p>
            </div>
            <div className="navbar213">
              <img src="/images/menu.webp" alt="calender" />
            </div>
            <div className="navbar214">
              <img src="/images/search.webp" alt="location" />
            </div>
          </div>
          <div className="navbar22">
            <img src="/images/logo.webp" alt="logo" />
          </div>
          <div className="navbar23">
            <div className="navbar231">
              <img src="/images/user.webp" alt="user" />
              <p>JOHN DOE</p>
            </div>
            <div className="navbar232">
              <div>
                <img src="/images/heart.webp" alt="like" />
                <p>7</p>
              </div>
              <div>
                <img src="/images/bag.webp" alt="bag" />
                <p>4</p>
              </div>
              <div>
                <img src="/images/search.webp" alt="" />
              </div>
            </div>
            <div className="navbar233">
              <div>
                <img src="/images/location.webp" alt="like" />
              </div>
              <div>
                <img src="/images/bag.webp" alt="bag" />
                <p>3</p>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar3">
          <div className="navbar31">
            <p
              onMouseEnter={() => setHoverIndex(0)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              ENGAGEMENT RINGS
            </p>
            <p
              onMouseEnter={() => setHoverIndex(1)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              WEDDING RINGS
            </p>
            <p
              onMouseEnter={() => setHoverIndex(2)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              DIAMONDS
            </p>
            <p
              onMouseEnter={() => setHoverIndex(3)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              GEMSTONE
            </p>
            <p
              onMouseEnter={() => setHoverIndex(4)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              JEWELRY
            </p>
            <p
              onMouseEnter={() => setHoverIndex(5)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              GIFTS
            </p>
            <p
              onMouseEnter={() => setHoverIndex(6)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              WATCHES
            </p>
            <p
              onMouseEnter={() => setHoverIndex(7)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              ABOUT
            </p>
          </div>
        </div>

        {/* NAVBAR 4 */}
        <div className="navbar4">
          <div
            className={`navbar41 dropdown-block ${
              hoverIndex === 0 ? "show" : "hide"
            }`}
          >
            <div className="navbar411">
              <div className="navbar4111">
                <div className="navbar4111-block">
                  <h4>DESIGN YOUR OWN RING</h4>
                  <div>
                    <img src="/images/setting.webp" alt="" />
                    <p>Start With A Settings</p>
                  </div>
                </div>
                <h4>Ready To Ship Engagement Rings</h4>
                <div className="navbar4111-block">
                  <h4>PRESENT ENGAGEMENT RING</h4>
                  <div>
                    <img src="/images/clock.webp" alt="" />
                    <p>10-Days Delivery</p>
                  </div>
                </div>
              </div>
              <div className="navbar4112">
                <h3>SHOP BY METAL</h3>
                <p>
                  <span></span> White gold
                </p>
                <p>
                  <span style={{ backgroundColor: "#FFD700" }}></span> Yellow
                  gold
                </p>
                <p>
                  <span style={{ backgroundColor: "#B76E79" }}></span> Rose gold
                </p>
                <p>
                  <span style={{ backgroundColor: "#E5E4E2" }}></span> Platinum
                </p>
              </div>
            </div>
            <div className="navbar412">
              <h2>ENGAGEMENT RINGS STYLE</h2>
              <div className="navbar412-image">
                <div className="navbar412-card">
                  <img src="/images/navbar1_image1.webp" alt="" />
                  <p>Solitaire</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar1_image2.webp" alt="" />
                  <p>Pove</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar1_image3.webp" alt="" />
                  <p>Halo</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar1_image4.webp" alt="" />
                  <p>Hidden Accents</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar1_image5.webp" alt="" />
                  <p>Vintage</p>
                </div>
              </div>
              <div className="navbar412-image">
                <div className="navbar412-card">
                  <img src="/images/navbar1_image6.webp" alt="" />
                  <p>Side Stone</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar1_image7.webp" alt="" />
                  <p>Three-Stone</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar1_image8.webp" alt="" />
                  <p>Shaped Shank</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar1_image9.webp" alt="" />
                  <p>Floral</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar1_image10.webp" alt="" />
                  <p>Signature Styles</p>
                </div>
              </div>
              <h2>ENGAGEMENT RINGS GUIDE</h2>
            </div>
            <div className="navbar413">
              <h2>CUSTOM ENGAGEMENT RINGS</h2>
              <img src="/images/navbar1_image11.webp" alt="" />
              <img src="/images/navbar1_image12.webp" alt="" />
            </div>
          </div>
          <div
            className={`navbar42 dropdown-block ${
              hoverIndex === 1 ? "show" : "hide"
            }`}
          >
            <div className="navbar411">
              <div className="navbar4211">
                <h4>WEDDING RING FOR WOMEN</h4>
                <h4>WEDDING RING FOR MEN</h4>
                <h4>SHOP ALL WEDDING RINGS</h4>
              </div>
              <div className="navbar4112">
                <h3>SHOP BY METAL</h3>
                <p>
                  <span></span> White gold
                </p>
                <p>
                  <span style={{ backgroundColor: "#FFD700" }}></span> Yellow
                  gold
                </p>
                <p>
                  <span style={{ backgroundColor: "#B76E79" }}></span> Rose gold
                </p>
                <p>
                  <span style={{ backgroundColor: "#E5E4E2" }}></span> Platinum
                </p>
              </div>
            </div>
            <div className="navbar412">
              <h2>ENGAGEMENT RINGS STYLE</h2>
              <div className="navbar412-image">
                <div className="navbar412-card">
                  <img src="/images/navbar2_image1.webp" alt="" />
                  <p>Classic Rings</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar2_image2.webp" alt="" />
                  <p>Diamond Rings</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar2_image3.webp" alt="" />
                  <p>Eternity Rings</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar2_image4.webp" alt="" />
                  <p>Textured Rings</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar2_image5.webp" alt="" />
                  <p>Vintage Rings</p>
                </div>
              </div>
              <h2>ENGAGEMENT RINGS GUIDE</h2>
              <div className="navbar412-image">
                <div className="navbar412-card">
                  <img src="/images/navbar2_image6.webp" alt="" />
                  <p>Side Stone</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar2_image7.webp" alt="" />
                  <p>Three-Stone</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar2_image8.webp" alt="" />
                  <p>Shaped Shank</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar2_image9.webp" alt="" />
                  <p>Floral</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar2_image10.webp" alt="" />
                  <p>Signature Styles</p>
                </div>
              </div>
            </div>
            <div className="navbar413">
              <h2>CUSTOM ENGAGEMENT RINGS</h2>
              <img src="/images/navbar2_image11.webp" alt="" />
            </div>
          </div>
          <div
            className={`navbar43 dropdown-block ${
              hoverIndex === 2 ? "show" : "hide"
            }`}
          >
            <div className="navbar411">
              <div className="navbar4211">
                <h3>DESIGN YOUR OWN RING</h3>
                <h4>WEDDING RING FOR WOMEN</h4>
                <h4>WEDDING RING FOR MEN</h4>
                <h4
                  style={{
                    backgroundColor: "rgb(234, 238, 241)",
                    color: "black",
                  }}
                >
                  SHOP ALL WEDDING RINGS
                </h4>
                <p>Ready To Ship Engagement Ring</p>
                <div className="navbar4111-block">
                  <h4>PRESENT ENGAGEMENT RING</h4>
                  <div>
                    <img src="/images/clock.webp" alt="" />
                    <p>10-Days Delivery</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar432">
              <h2>ENGAGEMENT RINGS STYLE</h2>
              <div className="navbar412-image">
                <div className="navbar412-card">
                  <img src="/images/navbar3_image1.webp" alt="" />
                  <p>Round</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar3_image2.webp" alt="" />
                  <p>Marquise</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar3_image3.webp" alt="" />
                  <p>Radiant</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar3_image4.webp" alt="" />
                  <p>Pear</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar3_image5.webp" alt="" />
                  <p>Cushion</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar3_image6.webp" alt="" />
                  <p>Oval</p>
                </div>
              </div>
              <h2>ENGAGEMENT RINGS GUIDE</h2>
              <div className="navbar412-image">
                <div className="navbar412-card">
                  <img src="/images/navbar3_image7.webp" alt="" />
                  <p>Princess</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar3_image8.webp" alt="" />
                  <p>Asscher</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar3_image9.webp" alt="" />
                  <p>Emerald</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar3_image10.webp" alt="" />
                  <p>Heart</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar3_image11.webp" alt="" />
                  <p>Old Miner</p>
                </div>
                <div className="navbar412-card">
                  <img src="/images/navbar3_image12.webp" alt="" />
                  <p>Europeon</p>
                </div>
              </div>
            </div>
            <div className="navbar433">
              <h2>LEARN MORE</h2>
              <p>All You Need To Know About Diamonds</p>
              <p>Understanding Diamond Fluorescence</p>
              <p>Exploring The Anatomy Of A Diamond</p>
              <p>What Are Lab Grown Diamonds?</p>
              <p>What Does Carat Mean In Diamonds?</p>
              <p>What Role Does Color Play In Diamond Quality?</p>
              <p>What Makes Old Miner Diamonds So Unique?</p>
              <p>Why Are Old European Cut Diamonds Timeless?</p>
            </div>
          </div>
          <div
            className={`navbar44 dropdown-block ${
              hoverIndex === 3 ? "show" : "hide"
            }`}
          >
            <div className="navbar441">
              <div className="navbar4411-block">
                <h4>DESIGN YOUR OWN RING</h4>
                <div>
                  <img src="/images/setting.webp" alt="" />
                  <p>Start With A Settings</p>
                </div>
              </div>
              <div className="navbar4411-block2">
                <h3>SHOP BY GEMSTONE</h3>
                <div className="navbar4411-block21">
                  <img src="/images/navbar4_image11.webp" alt="" />
                  <p>Sapphire</p>
                </div>
                <div className="navbar4411-block21">
                  <img src="/images/navbar4_image12.webp" alt="" />
                  <p>Emerald</p>
                </div>
                <div className="navbar4411-block21">
                  <img src="/images/navbar4_image13.webp" alt="" />
                  <p>Ruby</p>
                </div>
                <div className="navbar4411-block21">
                  <img src="/images/navbar4_image14.webp" alt="" />
                  <p>Morganite</p>
                </div>
              </div>
            </div>
            <div className="navbar442">
              <h3>SHOP BY COLOR</h3>
              <p>
                <span style={{ backgroundColor: "#77b2e5" }}></span> Blue
              </p>
              <p>
                <span style={{ backgroundColor: "#16a256" }}></span> Green
              </p>
              <p>
                <span style={{ backgroundColor: "#d63535" }}></span> Red
              </p>
              <p>
                <span style={{ backgroundColor: "#ef84e4" }}></span> Pink
              </p>
              <p>
                <span style={{ backgroundColor: "#e8d952" }}></span> Yellow
              </p>
              <p>
                <span style={{ backgroundColor: "#f7c971" }}></span> Peach
              </p>
              <p>
                <span style={{ backgroundColor: "#a04ce1" }}></span> Purple
              </p>
              <p>
                <span style={{ backgroundColor: "#31618b" }}></span> Teal
              </p>
              <p>
                <span style={{ backgroundColor: "#ee8102" }}></span> Orange
              </p>
              <p>
                <span style={{ backgroundColor: "#9f6734" }}></span> Brown
              </p>
            </div>
            <div className="navbar443">
              <h3>SHOP BY Shape</h3>
              <div className="navbar443-image">
                <div className="navbar443-card">
                  <img src="/images/navbar3_image1.webp" alt="" />
                  <p>Round</p>
                </div>
                <div className="navbar443-card">
                  <img src="/images/navbar3_image2.webp" alt="" />
                  <p>Marquise</p>
                </div>
                <div className="navbar443-card">
                  <img src="/images/navbar3_image3.webp" alt="" />
                  <p>Radiant</p>
                </div>
                <div className="navbar443-card">
                  <img src="/images/navbar3_image4.webp" alt="" />
                  <p>Pear</p>
                </div>
                <div className="navbar443-card">
                  <img src="/images/navbar3_image5.webp" alt="" />
                  <p>Cushion</p>
                </div>
              </div>
              <div className="navbar443-image">
                <div className="navbar443-card">
                  <img src="/images/navbar3_image7.webp" alt="" />
                  <p>Princess</p>
                </div>
                <div className="navbar443-card">
                  <img src="/images/navbar3_image8.webp" alt="" />
                  <p>Asscher</p>
                </div>
                <div className="navbar443-card">
                  <img src="/images/navbar3_image9.webp" alt="" />
                  <p>Emerald</p>
                </div>
                <div className="navbar443-card">
                  <img src="/images/navbar3_image6.webp" alt="" />
                  <p>Oval</p>
                </div>
                <div className="navbar443-card">
                  <img src="/images/navbar3_image10.webp" alt="" />
                  <p>Heart</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`navbar45 dropdown-block ${
              hoverIndex === 4 ? "show" : "hide"
            }`}
          >
            <div className="navbar451">
              <h3>POPULAR JEWELRY</h3>
              <div className="navbar451-image">
                <div className="navbar451_card">
                  <img src="/images/navbar5_image1.webp" alt="" />
                  <p>DIAMOND TENNIS BRACELETS</p>
                </div>
                <div className="navbar451_card">
                  <img src="/images/navbar5_image2.webp" alt="" />
                  <p>HOOP EARRINGS</p>
                </div>
                <div className="navbar451_card">
                  <img src="/images/navbar5_image3.webp" alt="" />
                  <p>DIAMOND STUDS</p>
                </div>
                <div className="navbar451_card">
                  <img src="/images/navbar5_image4.webp" alt="" />
                  <p>GOLD CHAIN</p>
                </div>
              </div>
            </div>
            <div className="navbar452">
              <h3>POPULAR JEWELRY</h3>
              <div className="navbar452-image">
                <div className="navbar452_card">
                  <img src="/images/navbar5_image5.webp" alt="" />
                  <p>Pendants</p>
                </div>
                <div className="navbar452_card">
                  <img src="/images/navbar5_image6.webp" alt="" />
                  <p>Bracelets</p>
                </div>
              </div>
              <div className="navbar452-image">
                <div className="navbar452_card">
                  <img src="/images/navbar5_image7.webp" alt="" />
                  <p>Earrings</p>
                </div>
                <div className="navbar452_card">
                  <img src="/images/navbar5_image8.webp" alt="" />
                  <p>Necklaces</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`navbar46 dropdown-block ${
              hoverIndex === 5 ? "show" : "hide"
            }`}
          >
            <div className="navbar461">
              <div className="navbar451-image">
                <div className="navbar451_card">
                  <img src="/images/navbar6_image1.webp" alt="" />
                  <p>DIAMOND TENNIS BRACELETS</p>
                </div>
                <div className="navbar451_card">
                  <img src="/images/navbar6_image2.webp" alt="" />
                  <p>HOOP EARRINGS</p>
                </div>
                <div className="navbar451_card">
                  <img src="/images/navbar6_image3.webp" alt="" />
                  <p>DIAMOND STUDS</p>
                </div>
                <div className="navbar451_card">
                  <img src="/images/navbar6_image4.webp" alt="" />
                  <p>GOLD CHAIN</p>
                </div>
                <div className="navbar451_card">
                  <div className="navbar462-image">
                    <div className="navbar462_card">
                      <img src="/images/navbar6_image5.webp" alt="" />
                      <p>WEDDING RING SETS</p>
                    </div>
                  </div>
                  <div className="navbar462-image">
                    <div className="navbar462_card">
                      <img src="/images/navbar6_image6.webp" alt="" />
                      <p>JEWELRY GIFT GUIDE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`navbar47 dropdown-block ${
              hoverIndex === 6 ? "show" : "hide"
            }`}
          >
            <div className="navbar461">
              <div className="navbar451-image">
                <div className="navbar451_card">
                  <img src="/images/navbar7_image1.webp" alt="" />
                </div>
                <div className="navbar451_card">
                  <img src="/images/navbar7_image2.webp" alt="" />
                </div>
                <div className="navbar451_card">
                  <img src="/images/navbar7_image3.webp" alt="" />
                </div>
                <div className="navbar451_card">
                  <img src="/images/navbar7_image4.webp" alt="" />
                </div>
                <div className="navbar451_card">
                  <img src="/images/navbar7_image5.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`navbar48 dropdown-block ${
              hoverIndex === 7 ? "show" : "hide"
            }`}
          >
            <div className="navbar461">
              <div className="navbar451-image">
                <div className="navbar451_card">
                  <img src="/images/navbar8_image1.webp" alt="" />
                </div>
                <div className="navbar451_card">
                  <img src="/images/navbar8_image2.webp" alt="" />
                </div>
                <div className="navbar451_card">
                  <img src="/images/navbar8_image3.webp" alt="" />
                </div>
                <div className="navbar451_card">
                  <img src="/images/navbar8_image4.webp" alt="" />
                </div>
                <div className="navbar451_card">
                  <img src="/images/navbar8_image5.webp" alt="" />
                  <div className="navbar48_card">
                    <h2>1200+</h2>
                    <img
                      className="navbar48-img1"
                      src="/images/star.webp"
                      alt=""
                    />
                    <img
                      className="navbar48-img2"
                      src="/images/navbar8_image6.webp"
                      alt=""
                    />
                    <h3>VIEW OUR REVIEWS</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
