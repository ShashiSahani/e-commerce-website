import React, { useState } from "react";
import "./CSS/LoginSignup.scss";
import * as String from "../Assets/Utils/Strings";
function LoginSignup() {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const login = async () => {
    console.log("Login", formData);
  };

  const signup = async () => {
    console.log("sign Up", formData);
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state} </h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input
              type="text"
              name="username"
              placeholder="Your name"
              value={formData.username}
              onChange={changeHandler}
            />
          ) : null}
          <input
          name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={changeHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={changeHandler}
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          {String.Continue}
        </button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have account ?{" "}
            <span onClick={() => setState("Login")}>Login</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account ?{" "}
            <span onClick={() => setState("Sign Up")}>Click here</span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing ,I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
