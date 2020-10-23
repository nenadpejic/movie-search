import React from "react";
import { ReactComponent as ArrowSvg } from "../../../images/left-arrow.svg";
import "./style.css";

const Arrow = ({ className, handleClick }) => {
  return (
    <button className={className} onClick={handleClick}>
      <ArrowSvg fill="#fff" />
    </button>
  );
};

export default Arrow;
