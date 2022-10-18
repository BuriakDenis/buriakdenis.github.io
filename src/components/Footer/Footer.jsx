import React from "react";
import "../Footer/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <small className="footer__copyright">
            Created by BurjaFrontDev |
          </small>
          <small className="footer__copyright">
            <span>&#169;</span>
            2022 All rights reserved
          </small>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
