import React, { useState } from "react";
import "./style.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search">
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
