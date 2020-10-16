import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Movies from "./components/Movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleSearch = (searchValue) => {
    const apiKey = "3c0a7396";
    const API = `https://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`;

    setIsLoading(true);
    setIsError(false);

    axios
      .get(API)
      .then((res) => {
        setIsLoading(false);
        if (res.data.Response === "True") {
          setMovies(res.data.Search);
        } else {
          // results
          console.log(res.data.Error);
          setIsError(true);
          setErrMsg(res.data.Error);
        }
      })
      .catch((err) => {
        // url
        console.log(err);
        setIsError(true);
        setErrMsg("Network error!");
        if (err.response && err.response.status === 401) {
          // api
          console.log(err.response.data.Error);
          setErrMsg(err.response.data.Error);
        }
      });
  };

  return (
    <div className="App">
      <Header />
      <Search onSearch={handleSearch} />
      <Movies
        movies={movies}
        isLoading={isLoading}
        isError={isError}
        errMsg={errMsg}
      />
    </div>
  );
}

export default App;
