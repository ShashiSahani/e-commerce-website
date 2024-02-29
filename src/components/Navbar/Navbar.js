import React from 'react'
import logo from '../../Assets/logo.png'
import * as String from '../../Assets/Utils/Strings'
function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>{String.SHOPPER}</p>
      </div>
      <ul className="nav-menu">
        <li>{String.Shop}</li>
        <li>{String.Men}</li>
        <li>{String.Women}</li>
        <li>{String.kids}</li>
      </ul>
      <div className="nav-login-cart">
        <button>{String.Login}</button>
      </div>
    </div>
  )
}

export default Navbar
