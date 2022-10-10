import React, { useState } from "react";
import ThreeArrowsLeft from "../../Animations/ThreeArrowsLeft/ThreeArrowsLeft";
import "../ButtonOpenModal/BtnOpenModal.scss";
import ModalWindow from "../../ModalWindow/ModalWindow";

const BtnOpenModal = (props) => {
  const [btnClick, setBtnClick] = useState(false)
  
  return (
    <>
    <a href={props.href} onClick={() => setBtnClick(!btnClick)} className={`button__link  ${props.className}`} id={props.id}>
      {props.title}
      <ThreeArrowsLeft />
      </a>
      <ModalWindow active={btnClick} setActive={setBtnClick}/>
    </>
  )
};
export default BtnOpenModal;
