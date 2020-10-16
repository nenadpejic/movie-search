import React from "react";
import "./style.css";

const Error = ({ errContent }) => {
  return (
    <div id="error">
      <p>{errContent}</p>
    </div>
  );
};

export default Error;
