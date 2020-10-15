import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Movies from "./components/Movies";

function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (searchValue) => {
    const apiKey = "3c0a7396";
    const API = `https://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`;

    try {
      const res = await axios.get(API);
      // console.log(res.data);
      setMovies(res.data.Search);
    } catch (err) {
      console.log(err.response.data.Error);
    }
  };

  return (
    <div className="App">
      <Header />
      <Search onSearch={handleSearch} />
      <Movies movies={movies} />
    </div>
  );
}

export default App;
