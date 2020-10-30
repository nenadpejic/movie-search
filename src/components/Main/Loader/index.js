import React from "react";
import "./style.css";
import { ReactComponent as LoaderSvg } from "../../../images/loader.svg";

const Loader = () => {
  return <LoaderSvg className="loader" fill="#000" />;
};

export default Loader;
