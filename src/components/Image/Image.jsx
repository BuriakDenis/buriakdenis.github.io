import React from "react";

const Image = (props) => {
  return (
    <img src={props.image} alt={props.alt} className={props.className}></img>
  );
};
export default Image;
