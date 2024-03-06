import React, { useContext, useState } from "react";
import "./CartItems.scss";
import remove_icon from "../../Assets/cart_cross_icon.png";
import { ShopContext } from "../Context/ShopContext";
import EmptyCart from "../EmptyCart/EmptyCart";

function CartItems() {
  const { all_product, cartItems, removeFromCart, updateCartQuantity } = useContext(ShopContext);

  const handleQuantityChange = (productId, newQuantity) => {
    updateCartQuantity(productId, newQuantity);
  };

  return (
    <div className="cartitems">
      {Object.keys(cartItems).some((key) => cartItems[key] > 0) ? (
        all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div className="cartitems-format-main" key={e.id}>
              <div className="cartitems-format">
                <div className="cartitem-image-container">
                  <img src={e.image} alt="" className="carticon-product-icon" />
                </div>
                <div className="cartitem-image-description">
                  <p className="name">{e.name}</p>
                  <div className="price-container">
                    <p style={{ marginRight: "15px" }}>₹{e.new_price}</p>
                    <p className="old-price">₹{e.old_price}</p>
                  </div>

                  <div className="quantity-container">
                    <label htmlFor={`quantity-${e.id}`}>Qty:</label>
                    <select
                      id={`quantity-${e.id}`}
                      className="cartitems-quantity"
                      value={cartItems[e.id]}
                      onChange={(event) => handleQuantityChange(e.id, parseInt(event.target.value))}
                    >
                      {[...Array(10).keys()].map((num) => (
                        <option key={num} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <p>
                    <span>Total Price: </span> ₹ {e.new_price * cartItems[e.id]}
                  </p>
                </div>
                <img
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                  className="cross-icon"
                />
              </div>
            </div>
            );
          }
          return null;
        })
      ) : (
       <EmptyCart/>
      )}
    </div>
  );
}

export default CartItems;


