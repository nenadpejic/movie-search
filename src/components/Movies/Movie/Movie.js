import React from "react";
import "./style.css";

const Movie = ({ movie }) => {
  return (
    <li>
      <img src={movie.Poster} alt="poster" />
      <p>
        {movie.Title} <span>({movie.Year})</span>
      </p>
    </li>
  );
};

export default Movie;
