import React from "react";
import "./style.css";
import imgSrc from "../../../images/placeholder.jpg";

const Movie = ({ movie }) => {
  return (
    <li>
      {movie.Poster === "N/A" ? (
        <div className="pna">
          <img className="pna-img" src={imgSrc} alt="placeholder" />
          <div className="pna-content">Poster Not Available</div>
        </div>
      ) : (
        <img src={movie.Poster} alt="poster" />
      )}
      <p>
        {movie.Title} <span>({movie.Year})</span>
      </p>
    </li>
  );
};

export default Movie;
