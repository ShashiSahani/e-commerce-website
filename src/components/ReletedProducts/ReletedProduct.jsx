import React from "react";
import "./ReletedProduct.scss";
import data_product from "../../Assets/data";
import * as String from "../../Assets/Utils/Strings";
import Items from "../Items/Items";
function ReletedProduct() {


  return (
    <div className="reletedproduct">
      <h1>{String.ReletedProduct}</h1>
      <span></span>
      <div className="reletedproducts-item">
        {data_product.map((item, i) => {
          return (
            <Items
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ReletedProduct;
