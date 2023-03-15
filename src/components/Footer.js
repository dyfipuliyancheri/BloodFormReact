import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <a
      href="https://rahulrajsb.me/"
      target="_blank"
      rel="noopener noreferrer"
      className="footer"
    >
      ©<span>{new Date().getFullYear()}</span>&nbsp;
      <span>Rahul Raj. All rights reserved.</span>
    </a>
  );
}

export default Footer;
