import React from "react";
import "./Offers.scss";
import exclusive_image from "../../Assets/exclusive_image.png";
import * as String from "../../Assets/Utils/Strings";
function Offers() {
  return (
    <div className="offers">
      <div className="offer-left">
        <h1>{String.Exclusive}</h1>
        <h1>{String.offerForYou}</h1>
        <p>{String.only_on}</p>
        <button>{String.check_Now}</button>
      </div>
      <div className="offer-right">
        <img src={exclusive_image} alt="exclusive_image" />
      </div>
    </div>
  );
}

export default Offers;
