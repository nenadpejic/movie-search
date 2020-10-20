import React from "react";
import "./style.css";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Logo className="logo" />
      <h1>Movie Search</h1>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
