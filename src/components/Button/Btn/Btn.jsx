import React from "react";
import { Link } from "react-router-dom";
import ThreeArrowsLeft from "../../Animations/ThreeArrowsLeft/ThreeArrowsLeft";
import "./Btn.scss";

const Btn = (props) => {
  return (
    <>
      <Link to={props.href} className={props.className} id={props.id}>
        {props.title}
        <ThreeArrowsLeft />
      </Link>
    </>
  )
};
export default Btn;
