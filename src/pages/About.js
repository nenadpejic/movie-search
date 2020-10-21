import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="About">
      <h2>About</h2>
      <p>
        Movie Search is an application where you can type in the title of a move
        and it will return a list of movies with that title, if there are any.
      </p>
      <p>
        This app is created as I wanted to explore Reacts functionality,
        showcasing Reacts component based architecture, unidirectional data flow
        and much more.. Movie database api is from OMDb API.
      </p>
      <h3>Technologies used:</h3>
      <ul className="exclude">
        <li>
          React
          <ul className="exclude">
            <li>Stateless Functional Components</li>
            <li>
              Hooks
              <ul className="exclude">
                <li>useState</li>
                <li>useRef</li>
                <li>useReducer</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>axios</li>
        <li>react-router-dom</li>
      </ul>
    </div>
  );
};

export default About;
