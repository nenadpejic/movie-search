import React from "react";
import "./style.css";
import loaderSvg from "../../../images/loader.svg";

const Loader = () => {
  return (
    <div id="loader">
      <img src={loaderSvg} alt="loader" />
    </div>
  );
};

export default Loader;
