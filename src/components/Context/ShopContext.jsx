import React, { createContext, useEffect, useState } from "react";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [all_product,setAll_Product]=useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart);
  const [totalItemCount,setTotalItemCount]=useState(0)
// fetching the data from backend
    useEffect(()=>
    {
      fetch('http://localhost:8000/allproducts')
      .then((response)=>response.json())
      .then((data)=>setAll_Product(data))
    },[])
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log("okk",cartItems);
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartQuantity = (itemId, newQuantity) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newQuantity }));
  };
  const getTotalCartAmount=()=>{
    let totalAmout=0;
    for(const item in cartItems){
       if(cartItems[item]>0)
       {
        let itemInfo=all_product.find((product)=>product.id===Number(item));
        totalAmout+=itemInfo.new_price*cartItems[item]
       }
    }
    return totalAmout;

  }
  const getTotalCartItems=()=>{
    let totalItem=0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0){
        totalItem+=cartItems[item];
     }
    }
    return totalItem;
  }
  const contextValue = { all_product, cartItems, addToCart, removeFromCart,updateCartQuantity,getTotalCartAmount,
    getTotalCartItems
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
