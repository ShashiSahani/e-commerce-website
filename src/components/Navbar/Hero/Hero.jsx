import React from "react";
import "./Hero.scss";
import arrow_icon from "../../../Assets/arrow.png";
import hero_image from "../../../Assets/hero_image.png";
import hand_icon from "../../../Assets/hand_icon.png";
function Hero() {
  return (
    <div className="hero">
      

  <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
  <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
      </div>
  <div className="hero-hand-icon">
        <p>New</p>
        <img src={hand_icon} alt="hand_icon" />
      </div>
      <div className="text">
        <p>Collections </p>
        <p>for everyone !!</p>
      </div>
      <div className="hero-latest-btn">
        <div>Letest Collection
          
        </div>
        <img src={arrow_icon} alt="arrow icon" />
      </div>
  </div>

     
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
}

export default Hero;
