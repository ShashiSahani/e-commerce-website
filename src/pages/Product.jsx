import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../components/Context/ShopContext";
import Breadcrum from "../components/Breadcrum/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import ReletedProduct from "../components/ReletedProducts/ReletedProduct";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find(
    (e) => e.id === Number(productId)
  );

  return (
    <main>
      <article>
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
        <DescriptionBox />
        <ReletedProduct />
      </article>
    </main>
  );
}

export default Product;
