import React from "react";
import "./Items.scss";

import * as String from "../../Assets/Utils/Strings";
import { Link } from "react-router-dom";

function Items(props) {
  return (
    <article className="item">
      {" "}
      {/* Use <article> for the item container */}
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          // alt={`Image of ${props.name}`}
          alt=""
          onClick={window.scrollTo(0, 0)}
        />
        {/* Alt attribute enhanced with the item name */}
      </Link>
      <h2>{props.name}</h2>
      <div className="item-prices">
        <div className="item-prices-new">
          {String.Special_price} ₹ {props.new_price}
        </div>
        <div className="item-prices-old">₹{props.old_price}</div>
      </div>
    </article>
  );
}

export default Items;
