import React from "react";
import "./Popular.scss";
import data_product from "../../Assets/data";
import Items from "../Items/Items";
import * as String from '../../Assets/Utils/Strings';
// console.log(data_product);
function Popular() {
  return (
    <div className="popular">
     <div className="popular-main">
     <h1>{String.popular}</h1>
      <hr />
      <div className="popular-item">
        {data_product?.map((item, i) => {
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
    </div>
  );
}

export default Popular;
