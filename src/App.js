import React from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Movies />
    </div>
  );
}

export default App;
