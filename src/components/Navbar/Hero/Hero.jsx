import React from "react";
import "./Hero.scss";
import arrow_icon from "../../../Assets/arrow.png";
import hero_image from "../../../Assets/hero_image.png";
import hand_icon from "../../../Assets/hand_icon.png";
import * as String from "../../../Assets/Utils/Strings";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-main">
        <div className="hero-left">
          <h2>{String.new_arrival}</h2>
        </div>
        <div className="hero-hand-icon">
          <p>{String.new_one}</p>
          <img src={hand_icon} alt="hand_icon" />
        </div>
        <div className="text">
          <p>{String.Collection} </p>
          {/* <p>for everyone !!</p> */}
        </div>
        <div className="hero-latest-btn">
          <div>{String.Letest_Collection}</div>
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
