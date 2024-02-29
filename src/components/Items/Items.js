import React from "react";
import './Item.scss'
function Items(props) {
  return (
    <div className="item">
      <img src={props.image} alt="Prop Image" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">{props.new_price}</div>
        <div className="item-price-old">{props.old_price}</div>
      </div>
    </div>
  );
}

export default Items;
