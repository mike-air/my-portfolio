import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        <p className="mb-0">Copyright © Mike</p>
        <div className="social-links text-right m-auto ml-sm-auto">
          <a href="mailto:mikeandy3310@gmail.com" className="link">
            <i className="ti-google" />
          </a>
          <a href="tel:+2332451598616" className="link">
            <i className="fas fa-phone" />
          </a>

          <a href="javascript:void(0)" className="link">
            <i className="ti-rss" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
