import React from "react";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-violet-100  text-violet-900">
      <div>
        <img src={logo} alt="" className="w-20" />
        <p className="font-bold">Laptop Mart </p>
        <p>Copyright © 2022 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
