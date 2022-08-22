import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <div>
      <Navbar
        expand="dark"
        bg="dark"
        fixed="bottom"
        className="modFooter text-light logoRS"
      >
        <a href="https://github.com/Shryler" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github fa-xl"></i>
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin fa-xl"></i>
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-paypal fa-xl"></i>
        </a>
      </Navbar>
    </div>
  );
};

export default Footer;
