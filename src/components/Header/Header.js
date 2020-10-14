import React from "react";
import "./style.css";
import { ReactComponent as Logo } from "../../images/logo.svg";

const Header = () => {
  return (
    <header>
      <Logo className="logo" />
      <h1>Movie Search</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
