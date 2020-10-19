import React, { useRef, useState } from "react";
import "./style.css";
import Movie from "./Movie";
import Loader from "./Loader";
import Error from "./Error";

const Movies = ({ state }) => {
  const { movies, isLoading, isError, errMsg } = state;
  const myRef = useRef();
  const [start, setStart] = useState(true);
  const [end, setEnd] = useState(false);

  const handleClick = (param) => {
    param
      ? (myRef.current.scrollLeft -= 900)
      : (myRef.current.scrollLeft += 900);
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
      ) : (
        <React.Fragment>
          <ul ref={myRef} onScroll={(e) => handleScroll(e)}>
            {movies.map((movie) => (
              <Movie key={movie.imdbID} movie={movie} />
            ))}
          </ul>
          {!start ? (
            <button className="btnLeft" onClick={() => handleClick(true)}>
              {"<"}
            </button>
          ) : null}
          {!end ? (
            <button className="btnRight" onClick={() => handleClick(false)}>
              {">"}
            </button>
          ) : null}
        </React.Fragment>
      )}
    </section>
  );
};

export default Movies;
