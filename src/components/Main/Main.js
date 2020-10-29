import React from "react";
import "./style.css";
import Loader from "./Loader";
import Error from "./Error";
import Movies from "./Movies";
import AdvancedSearch from "./AdvancedSearch";
import MovieDetails from "./MovieDetails";

const Main = ({ state, dispatch, handleSearch }) => {
  const {
    movies,
    isLoading,
    errMsg,
    isAdvancedSearch,
    isMovieDetails,
    movieData,
  } = state;

  return (
    <main id="Main">
      {isMovieDetails ? <MovieDetails data={movieData} /> : null}
      {isAdvancedSearch ? <AdvancedSearch handleSearch={handleSearch} /> : null}
      {isLoading ? (
        <Loader />
      ) : errMsg ? (
        <Error errMsg={errMsg} />
      ) : movies ? (
        <Movies movies={movies} dispatch={dispatch} />
      ) : null}
    </main>
  );
};

export default Main;
