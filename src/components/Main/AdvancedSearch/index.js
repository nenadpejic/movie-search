import React, { useState } from "react";
import "./style.css";

const AdvancedSearch = ({ handleSearch }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [isErr, setIsErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title === null || title === "") {
      setIsErr(true);
    } else {
      handleSearch(title, year, type);
      setTitle("");
      setYear("");
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  const handleFocus = () => {
    if (title === null || title === "") {
      setIsErr(true);
    } else {
      setIsErr(false);
    }
  };

  return (
    <div className="advanced-search">
      <h2>Advanced Search</h2>
      <p>Search by providing a movie title, year of release and a type.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <div>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              onBlur={handleFocus}
            />
            {isErr ? (
              <span className="input-err">Please provide the movie title.</span>
            ) : null}
          </div>
        </label>
        <label>
          Year:
          <input type="text" value={year} onChange={handleYearChange} />
        </label>
        <label>
          Type:
          <select onChange={handleTypeChange}>
            <option value=""></option>
            <option value="movie">movie</option>
            <option value="series">series</option>
            <option value="episode">episode</option>
          </select>
        </label>
        <button>Search</button>
      </form>
    </div>
  );
};

export default AdvancedSearch;
