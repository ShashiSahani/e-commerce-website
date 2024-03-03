import React from "react";
import './Item.scss'

import * as String from '../../Assets/Utils/Strings'
import { Link } from "react-router-dom";
function Items(props) {
  console.log("item props",props.id)
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}><img src={props.image} alt="Prop Image" /></Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-prices-new">{String.Special_price} ₹ {props.new_price}</div>
        <div className="item-prices-old">₹{props.old_price}</div>
      </div>
    </div>
  );
}

export default Items;
