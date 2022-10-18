import React from "react";
import "../ArrowDown/ArrowDown.scss";

const ArrowsDown = (props) => {
  return (
    <a href={props.href} className={`arrow__scroll-down ${props.class}`}>
      <span className="arrow__scroll-link  arrow"></span>
    </a>
  )
}

export default ArrowsDown;