import React from "react";
import leftArrow from "../../../images/left-arrow.svg";
import "./style.css";

const Arrow = ({ className, handleClick }) => {
  return (
    <button className={className} onClick={handleClick}>
      <img src={leftArrow} alt="arrow" />
    </button>
  );
};

export default Arrow;
