import React from "react";
import "./style.css";
import imgSrc from "../../../images/placeholder.jpg";

const Movie = ({ movie }) => {
  return (
    <li>
      <a
        href={"https://www.imdb.com/title/" + movie.imdbID}
        target="_blank"
        rel="noopener noreferrer"
      >
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
      </a>
    </li>
  );
};

export default Movie;
