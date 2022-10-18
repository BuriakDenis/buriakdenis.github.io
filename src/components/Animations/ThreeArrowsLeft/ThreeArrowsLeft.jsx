import React from "react";
import "../ThreeArrowsLeft/ThreeArrowsLeft.scss";

const ThreeArrowsLeft = (props) => {
  return (
    <div className={`arrow__left ${props.class}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default ThreeArrowsLeft;