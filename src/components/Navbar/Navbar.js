//navbar.js
import React, { useState } from 'react'
import logo from '../../Assets/logo.png'
import cart_icon from '../../Assets/cart_icon.png'
import './Navbar.scss'
import * as String from '../../Assets/Utils/Strings'
function Navbar() {
  const [menu,setMenu]=useState("shop");
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>{String.SHOPPER}</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>setMenu("shop")}>{String.Shop} {menu==="shop"?<hr/>:""}</li>
        <li  onClick={()=>setMenu("mens")} >{String.Men}{menu==="mens"?<hr/>:""}</li>
        <li  onClick={()=>setMenu("womens")}>{String.Women} {menu==="womens"?<hr/>:""}</li>
        <li  onClick={()=>setMenu("kids")}>{String.kids} {menu==="kids"?<hr/>:""}</li>
      </ul>
      <div className="nav-login-cart">
        <button>{String.Login}</button>
        <img src={cart_icon} alt="card_icon" />
        <span className="nav-cart-count">
          0
        </span>
      </div>
    </div>
  )
}

export default Navbar
