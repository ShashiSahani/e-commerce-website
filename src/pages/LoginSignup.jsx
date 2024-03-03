import React from 'react'
import './CSS/LoginSignup.scss';
import * as String from '../Assets/Utils/Strings'
function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{String.sing_up} </h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>{String.Continue}</button>
        <p className='loginsignup-login'>Already have account ? <span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing ,I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
