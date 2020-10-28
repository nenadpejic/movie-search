import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import Movie from "./Movie";
import Loader from "./Loader";
import Error from "./Error";
import Arrow from "./Arrow";
import AdvancedSearch from "./AdvancedSearch";
import MovieDetails from "./MovieDetails";

const Movies = ({ state, dispatch, handleSearch }) => {
  const {
    movies,
    isLoading,
    isError,
    errMsg,
    advancedSearch,
    movieDetails,
    movieData,
  } = state;
  const windowRef = useRef();
  const ulRef = useRef();
  const [start, setStart] = useState(true);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setStart(true);
      setEnd(false);
    }
  }, [isLoading]);

  const handleClick = (param) => {
    param
      ? (windowRef.current.scrollLeft -= windowRef.current.clientWidth)
      : (windowRef.current.scrollLeft += windowRef.current.clientWidth);
  };

  const handleScroll = (e) => {
    const elem = e.target;
    elem.scrollLeft > 0 ? setStart(false) : setStart(true);
    Math.ceil(elem.scrollLeft) >= elem.scrollWidth - elem.clientWidth
      ? setEnd(true)
      : setEnd(false);
  };

  return (
    <section id="Movies">
      {movieDetails ? <MovieDetails data={movieData} /> : null}
      {advancedSearch ? <AdvancedSearch handleSearch={handleSearch} /> : null}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error errMsg={errMsg} />
      ) : movies ? (
        <React.Fragment>
          <div
            className="window"
            ref={windowRef}
            onScroll={(e) => handleScroll(e)}
          >
            <ul ref={ulRef}>
              {movies.map((movie) => (
                <Movie key={movie.imdbID} movie={movie} dispatch={dispatch} />
              ))}
            </ul>
          </div>
          {!end ? (
            <Arrow
              className="arrow-right"
              handleClick={() => handleClick(false)}
            />
          ) : null}
          {!start ? (
            <Arrow
              className="arrow-left"
              handleClick={() => handleClick(true)}
            />
          ) : null}
        </React.Fragment>
      ) : null}
    </section>
  );
};

export default Movies;
