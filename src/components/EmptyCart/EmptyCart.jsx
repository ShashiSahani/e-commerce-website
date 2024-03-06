import React from 'react'
import './EmptyCart.scss'
import empty_bag  from "../../Assets/empty_bag.png";

function EmptyCart() {
  return (
    <div>
         <div className="empty-cart">
        <img src={empty_bag} alt="" />
        <div className="emptyCart-base-emptyText">Hey, it feels so light!</div>
        <div className="emptyCart-base-emptyDesc">There is nothing in your bag. Let's add some items.</div>
        <div className="emptyCart-base"><button className="button">ADD ITEMS FROM WISHLIST</button></div>
        </div>
      
    </div>
  )
}

export default EmptyCart
