import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://twitter.com"><FaTwitter /></a>
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://linkedin.com"><FaLinkedin /></a>
      </div>
      <p> &copy; 202 pedrotechpizza.com</p>
    </div>
  );
}

export default Footer;


