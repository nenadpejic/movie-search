import React from "react";
import "./style.css";

const Error = ({ errMsg }) => {
  return (
    <div id="error">
      <p>{errMsg}</p>
    </div>
  );
};

export default Error;
