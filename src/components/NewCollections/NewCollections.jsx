import React, { useEffect, useState } from "react";
import "./NewCollections.scss";
// import new_collections from "../../Assets/new_collections";
import * as String from "../../Assets/Utils/Strings";
import Items from "../Items/Items";
function NewCollections() {
  const [new_collection, setNew_Collection] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/newcollection")
      .then((response) => response.json())
      .then((data) => setNew_Collection(data));
  }, []);

  console.log("new_collection==>",new_collection)
  return (
    <div className="new-collections">
      <h1>{String.New_Collections}</h1>
      <hr />
      <div className="collections">
        {new_collection.length === 0 ? (
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <p >No Product</p>
          </div>
        ) : (
          new_collection?.map((item, i) => {
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
  );
}

export default NewCollections;
