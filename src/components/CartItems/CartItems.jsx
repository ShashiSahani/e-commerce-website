import React, { useContext, useState } from "react";
import "./CartItems.scss";
import remove_icon from "../../Assets/cart_cross_icon.png";
import { ShopContext } from "../Context/ShopContext";

function CartItems() {
  const { all_product, cartItems, removeFromCart, updateCartQuantity } =
    useContext(ShopContext);

  const handleQuantityChange = (productId, newQuantity) => {
    updateCartQuantity(productId, newQuantity);
  };

  return (
    <div className="cartitems">
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div
                className="cartitems-format-main"
                style={{ padding: "10px" }}
                key={e.id}
              >
                <div className="cartitems-format">
                  <div className="cartitem-image-container">
                    <img
                      src={e.image}
                      alt="product image"
                      className="carticon-product-icon"
                    />
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
                        onChange={(event) =>
                          handleQuantityChange(
                            e.id,
                            parseInt(event.target.value)
                          )
                        }
                      >
                        {[...Array(10).keys()].map((num) => (
                          <option key={num} value={num + 1}>
                            {num + 1}
                          </option>
                        ))}
                      </select>
                    </div>

                    <p>
                      <span>Total Price: </span> ₹
                      {e.new_price * cartItems[e.id]}
                    </p>
                  </div>
                  <div className="cross-icon-container">
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
              </div>
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-totals">
          <h1>Cart Totals</h1>
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>₹ {0}</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
           
          </div>
          <hr />

          <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>₹{0}</h3>
            </div>
          <button className="processd-checkout">PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If You have promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button type="submit">submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
