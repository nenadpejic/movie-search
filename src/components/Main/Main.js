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
    advancedSearch,
    movieDetails,
    movieData,
  } = state;

  return (
    <main id="Main">
      {movieDetails ? <MovieDetails data={movieData} /> : null}
      {advancedSearch ? <AdvancedSearch handleSearch={handleSearch} /> : null}
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
