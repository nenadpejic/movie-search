import React, { useEffect, useRef, useState } from "react";
import Movie from "./Movie";
import Arrow from "./Arrow";
import "./style.css";

const Movies = ({ movies, dispatch }) => {
  const windowRef = useRef(null);
  const ulRef = useRef(null);
  const [start, setStart] = useState(true);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    setStart(true);
    setEnd(false);
  }, []);

  const handleClick = (param) => {
    if (param === "left") {
      windowRef.current.scrollLeft -= windowRef.current.clientWidth;
    } else if (param === "right") {
      windowRef.current.scrollLeft += windowRef.current.clientWidth;
    }
  };

  const handleScroll = (e) => {
    const elem = e.target;
    elem.scrollLeft > 0 ? setStart(false) : setStart(true);
    Math.ceil(elem.scrollLeft) >= elem.scrollWidth - elem.clientWidth
      ? setEnd(true)
      : setEnd(false);
  };

  return (
    <div id="Movies">
      <div ref={windowRef} className="window" onScroll={(e) => handleScroll(e)}>
        <ul ref={ulRef}>
          {movies.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} dispatch={dispatch} />
          ))}
        </ul>
      </div>
      {!end ? (
        <Arrow
          className="arrow-right"
          handleClick={() => handleClick("right")}
        />
      ) : null}
      {!start ? (
        <Arrow className="arrow-left" handleClick={() => handleClick("left")} />
      ) : null}
    </div>
  );
};

export default Movies;
