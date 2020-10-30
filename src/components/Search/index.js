import React, { useState } from "react";
import "./style.css";

const Search = ({ dispatch, handleSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchValue);
    setSearchValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search">
        <ul className="dropdown">
          <li>
            All
            <ul className="submenu">
              <li onClick={() => dispatch({ type: "ADVANCED_SEARCH" })}>
                Advanced Search
              </li>
            </ul>
          </li>
        </ul>
        <input
          type="text"
          placeholder="Movie title"
          value={searchValue}
          onChange={(e) => handleChange(e)}
        />
        <button>Search</button>
      </div>
    </form>
  );
};

export default Search;
