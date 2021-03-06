import React from "react";
import "./style.css";
import imgSrc from "../../../images/placeholder.jpg";

const MovieDetails = ({ data }) => {
  const handleRuntime = (data) => {
    if (data.Runtime === "N/A") {
      return ["N/A", "N/A"];
    } else {
      let min = parseInt(data.Runtime);
      let hour = Math.floor(min / 60);
      min = min % 60;
      return [hour, min];
    }
  };

  return (
    <div className="movie-details">
      {data.Poster === "N/A" ? (
        <div className="pna">
          <img className="pna-img" src={imgSrc} alt="placeholder" />
          <span className="pna-content">Poster Not Available</span>
        </div>
      ) : (
        <img src={data.Poster} alt="poster" />
      )}
      <div className="info">
        <div className="container">
          <div className="header">
            <h2>
              {data.Title + " "}
              <span className="year">{`(${data.Year})`}</span>
            </h2>
            <span>{`${handleRuntime(data)[0]} h ${
              handleRuntime(data)[1]
            } min | ${data.Runtime} | ${data.Genre} | ${data.Released} | ${
              data.Country
            }`}</span>
          </div>
        </div>
        <div className="container plot">
          <p>{data.Plot}</p>
          <p>
            <strong>Director:</strong> {data.Director}
          </p>
          <p>
            <strong>Actors:</strong> {data.Actors}
          </p>
          <div className="score">
            <span className="metascore">
              <a
                href={`https://www.imdb.com/title/${data.imdbID}/criticreviews`}
                target="_blanc"
                rel="noopener noreferrer"
              >
                Metascore:
              </a>{" "}
              {data.Metascore}
            </span>
            <span className="imdb-rating">
              <a
                href={`https://www.imdb.com/title/${data.imdbID}`}
                target="_blanc"
                rel="noopener noreferrer"
              >
                IMDB Rating:
              </a>{" "}
              {data.imdbRating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
