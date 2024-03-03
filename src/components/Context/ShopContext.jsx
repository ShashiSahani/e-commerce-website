import React, { createContext } from "react";
import all_product from "../../Assets/all_product";
export const ShopContext = createContext(null);
// console.log("all_product", all_product);
// console.log("shope", ShopContext);
const ShopContextProvider = (props) => {
  const contextValue = { all_product };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;