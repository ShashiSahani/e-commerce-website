import React from "react";
import './Item.scss'
import * as String from '../../Assets/Utils/Strings'
function Items(props) {
  return (
    <div className="item">
      <img src={props.image} alt="Prop Image" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-prices-new">{String.Special_price} ₹ {props.new_price}</div>
        <div className="item-prices-old">₹{props.old_price}</div>
      </div>
    </div>
  );
}

export default Items;
