import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import Movie from "./Movie";
import Loader from "./Loader";
import Error from "./Error";
import Arrow from "./Arrow";

const Movies = ({ state }) => {
  const { movies, isLoading, isError, errMsg } = state;
  const myRef = useRef();
  const [start, setStart] = useState(true);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    setStart(true);
  }, [isLoading]);

  const handleClick = (param) => {
    param
      ? (myRef.current.scrollLeft -= myRef.current.clientWidth)
      : (myRef.current.scrollLeft += myRef.current.clientWidth);
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
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error errMsg={errMsg} />
      ) : movies[0] ? (
        <React.Fragment>
          <ul ref={myRef} onScroll={(e) => handleScroll(e)}>
            {movies.map((movie) => (
              <Movie key={movie.imdbID} movie={movie} />
            ))}
          </ul>
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
