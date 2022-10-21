import React from "react";
import ThreeArrowsLeft from "../../Animations/ThreeArrowsLeft/ThreeArrowsLeft";
import "./BtnOpenModal.scss";
import { useDispatch} from "react-redux";
import { modalOpen } from "../../../Store/Reducers/OpenModalSlice"
const BtnOpenModal = (props) => {
  const dispatch = useDispatch()
  
  return (
    <>
    <a href={props.href} onClick={() =>dispatch(modalOpen())} className={`button__link  ${props.className}`} id={props.id}>
      {props.title}
      <ThreeArrowsLeft />
      </a>
    </>
  )
};
export default BtnOpenModal;
