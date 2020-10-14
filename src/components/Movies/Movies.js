import React, { useState } from "react";
import "./style.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  return (
    <ul id="Movies">
      {movies.map((movie) => (
        <li>{movie}</li>
      ))}
    </ul>
  );
};

export default Movies;
