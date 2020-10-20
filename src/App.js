import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import { Home, About } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
};

export default App;
