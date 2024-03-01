import React from "react";
import "./Footer.scss";
import instagram_icon from "../../Assets/instagram_icon.png";
import pintester_icon from "../../Assets/pintester_icon.png";
import whatsapp_icon from "../../Assets/whatsapp_icon.png";

import footer_logo from "../../Assets/logo_big.png";
import * as String from "../../Assets/Utils/Strings";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="footer-logo" />
        <p>{String.SHOPPER}</p>
      </div>
      <ul className="footer-links">
        <li>{String.Company}</li>
        <li>{String.Products}</li>
        <li>{String.Offices}</li>
        <li>{String.About}</li>
        <li>{String.Contact}</li>
      </ul>
      <div className="footer-socials-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          
          <img src={whatsapp_icon} alt="" />
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023- All Right Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
