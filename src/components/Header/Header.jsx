import React, { useEffect, useState} from "react";
import "../Header/Header.scss";
import headerScrollPos from "./HeaderScrollPosition";


const Header = () => {
  let [burgerOpen, setBurgerOpen] = useState(false)

  useEffect(() => {
    headerScrollPos()
  })
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__border">
          <div className="header__logo">
            <div className="header__logo-content">
              <a href="#home" className="header__logo-link">
                BD
              </a>
            </div>
          </div>
          <nav className="header__navigation">
            <ul className={`header__menu ${burgerOpen && 'active'}`} >
                <a href="#home" className="header__link">
                  Home
                </a>
                <a href="#about" className="header__link">
                  About
                </a>
                <a href="#jobs" className="header__link">
                  Jobs
                </a>
                <a href="#skills" className="header__link">
                  Skills
                </a>
                <a href="!#" className="header__link">
                  Contact
                </a>
            </ul>
          </nav>
          <div onClick={() => setBurgerOpen(burgerOpen = !burgerOpen)} className={`header__menu-btn ${burgerOpen && 'active'}`}>
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>
      </div>
    </header >
  );
};
export default Header;

