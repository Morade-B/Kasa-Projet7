import React from "react";
import logo from "../assets/logo2.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="text">© 2020 Kasa.All rights reserved</div>
      </div>
    </>
  );
}

export default Footer;
