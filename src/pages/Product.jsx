import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../components/Context/ShopContext";
import Breadcrum from "../components/Breadcrum/Breadcrum";

function Product() {
  console.log("props");
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  console.log(all_product);

  return (
    <div>
      <Breadcrum product={product} />
    </div>
  );
}

export default Product;
