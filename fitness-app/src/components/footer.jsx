import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__section">
        <div className="footer__section__title h6">Company</div>
        <div>About Us</div>
        <div>Why Us</div>
        <div>About Us</div>
      </div>
      <div className="footer__section">
        <div className="footer__section__title h6">Categories</div>
        <div>Basic Yoga</div>
        <div>Stregth Training</div>
        <div>Body Building</div>
        <div>Weight Loss</div>
      </div>
      <div className="footer__section">
        <div div className="footer__section__title h6">
          Account
        </div>
        <div>Support Center</div>
        <div>Privacy Policy</div>
        <div>Terms & Conditions</div>
      </div>
      <div className="footer__section">
        <div div className="footer__section__title h6">Contact US</div>
        <div>+1(406) 555-1020</div>
        <div>example@gmail.com</div>
        <div>2464 Royal Ln. Mesa, New Jersey 45463</div>
      </div>
      <div className="footer__section">
        <div div className="footer__section__title h6">Subscribe Our Newsletter</div>
        <input placeholder="Enter your email"/>
        <div>Never miss an update & news to your email.</div>
      </div>
    </div>
  );
};

export default Footer;
