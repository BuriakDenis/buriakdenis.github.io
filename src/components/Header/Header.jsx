import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "../Header/Header.scss";


const Header = () => {
  let [burgerOpen, setBurgerOpen] = useState(false)
  const modal = useSelector(state => state.modal.modalState)
  const head = useRef();
  const bodyWidth = document.body.offsetWidth;

  const bodyPadding = () => {
    if (modal) {
      document.body.style.overflow = "hidden";
      document.body.style.width = bodyWidth + "px";
    } else {
      setTimeout(() => {
        document.body.style.overflow = "visible";
        document.body.style.width = "auto";
      }, 500);
    }
  }
  bodyPadding();

  useEffect(() => {
    const headerPadding = () => {
      if (modal) {
        head.current.style.width = "auto"
      } else {
        head.current.style.width = bodyWidth + "px";
      }
    }
    
    let lastScroll = 0;

    const scrollPosition = () => 
      window.pageYOffset || document.documentElement.scrollTop;
    
    const containHide = () =>
      head.current.classList.contains("hide");

    window.addEventListener("scroll", () => {
      if (scrollPosition() > lastScroll && !containHide()) {
        head.current.classList.add("hide");
      } else if (scrollPosition() < lastScroll && containHide()) {
        head.current.classList.remove("hide");
      }

      lastScroll = scrollPosition();
    });

    headerPadding();
  }, [])
  return (
    <header className="header" ref={head}>
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

