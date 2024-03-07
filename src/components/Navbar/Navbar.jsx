//navbar.js
import React, { useContext, useEffect, useState } from 'react'
import logo from '../../Assets/logo.png'
import cart_icon from '../../Assets/cart_icon.png'
import './Navbar.scss'
import * as String from '../../Assets/Utils/Strings'
import {  Link } from "react-router-dom";
import { ShopContext } from '../Context/ShopContext'

function Navbar() {
  const {getTotalCartItems} =useContext(ShopContext); 
  const [menu,setMenu]=useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>{String.SHOPPER}</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>setMenu("shop")}><Link to='/' style={{textDecoration:"none"}}> {String.Shop} </Link>{menu==="shop"?<hr/>:""}</li>
        <li  onClick={()=>setMenu("mens")} ><Link to='/mens' style={{textDecoration:"none"}}>{String.Men}</Link>{menu==="mens"?<hr/>:""}</li>
        <li  onClick={()=>setMenu("womens")}><Link to='/womens' style={{textDecoration:"none"}}>{String.Women}</Link> {menu==="womens"?<hr/>:""}</li>
        <li  onClick={()=>setMenu("kids")}><Link to='/kids' style={{textDecoration:"none"}}>{String.kids}</Link> {menu==="kids"?<hr/>:""}</li>
      </ul>
      <div className="nav-login-cart">
        <button><Link to='/login' style={{textDecoration:"none"}}>{String.Login}</Link></button>
        <Link to='/cart'><img src={cart_icon} alt="card_icon" /></Link>
        <span className="nav-cart-count">
        {getTotalCartItems()}
        </span>
      </div>
    </div>
  )
}

export default Navbar
