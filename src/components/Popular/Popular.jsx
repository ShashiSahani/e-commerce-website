import React, { useEffect, useState } from "react";
import "./Popular.scss";
import data_product from "../../Assets/data";
import Items from "../Items/Items";
import * as String from "../../Assets/Utils/Strings";
// console.log(data_product);
function Popular() {
  const [popularProducts, setPopularProduct] = useState([]);
  //fetching the api data from backend 
  useEffect(() => {
    fetch("http://localhost:8000/popularinwomen")
      .then((response) => response.json())
      .then((data) => setPopularProduct(data));
  }, []);

  return (
    <div className="popular">
      <div className="popular-main">
        <h1>{String.popular}</h1>
        <hr />
        <div className="popular-item">
          {popularProducts.length === 0 ? (
            <div>
              <p>No Popular Product Found!</p>
            </div>
          ) : (
            popularProducts?.map((item, i) => {
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
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Popular;
