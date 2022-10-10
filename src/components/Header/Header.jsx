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
              <li className="header__list">
                <a href="#home" className="header__link">
                  Home
                </a>
              </li>
              <li className="header__list">
                <a href="#about" className="header__link">
                  About
                </a>
              </li>
              <li className="header__list">
                <a href="#jobs" className="header__link">
                  Jobs
                </a>
              </li>
              <li className="header__list">
                <a href="#skills" className="header__link">
                  Skills
                </a>
              </li>
              <li className="header__list">
                <a href="!#" className="header__link">
                  Contact
                </a>
              </li>
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

