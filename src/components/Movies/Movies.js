import React from "react";
import "./style.css";
import Movie from "./Movie";

const Movies = ({ movies }) => {
  const handleClick = (param) => {
    let ul = document.querySelector("#Movies ul");
    param ? (ul.scrollLeft -= 900) : (ul.scrollLeft += 900);
  };

  return (
    <div id="Movies">
      <ul>
        {movies.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </ul>
      <button className="btnLeft" onClick={() => handleClick(true)}>
        {"<"}
      </button>
      <button className="btnRight" onClick={() => handleClick(false)}>
        {">"}
      </button>
    </div>
  );
};

export default Movies;
