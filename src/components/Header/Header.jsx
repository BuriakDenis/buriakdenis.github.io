import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Header/Header.scss";
import {
  NavLink, Link, useLocation
} from "react-router-dom";
import { navStateDeactive } from "../../Store/Reducers/SetActiveNavLink";
import Logo from "../Logo/Logo";



const Header = () => {
  let [burgerOpen, setBurgerOpen] = useState(false)
  const dispatch = useDispatch()
  const head = useRef();
  const modal = useSelector(state => state.modal.modalState)
  const nav = useSelector(state => state.navLink.navState)
  const setActiveNavLink = ({ isActive }) => isActive ? 'active-link' : "header__link"
  
  const bodyWidth = document.body.offsetWidth;
  const { hash, key } = useLocation()
  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1))
      targetElement?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [key, hash])
  useEffect(() => {
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
  }, [])
  useEffect(() => {
    
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
    const headerPadding = () => {
      modal ? head.current.style.width = bodyWidth + "px" : setTimeout(() => { head.current.style.width = "100%"}, 500);
    }
    headerPadding();
  }, [bodyWidth, modal])

  return (
    <>
      <header className="header" ref={head}>
        <div className="header__container">
          <div className="header__border">
            <div className="header__logo">
              <div className="header__logo-content">
                <Logo className="header__logo-link" class="header__logo-img"/>
              </div>
            </div>
            <nav className="header__navigation">
              <ul className={`header__menu ${burgerOpen && 'active'}`} >
                <NavLink to="/#home" className={setActiveNavLink} end onClick={() => dispatch(navStateDeactive())}>
                  Home
                </NavLink>
                <Link to="/#about" className="header__link" onClick={() => dispatch(navStateDeactive())}>
                  About
                </Link>
                <Link to="/#skills" className={nav ? "active-link" : "header__link"} onClick={() => dispatch(navStateDeactive())}>
                  Skills
                </Link>
                <Link to="/#jobs" className="header__link" onClick={() => dispatch(navStateDeactive())}>
                  Jobs
                </Link>
                <Link to="*" className="header__link" onClick={() => dispatch(navStateDeactive())}>
                  Contact
                </Link>
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
    </>
  );
};
export default Header;

