import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, About } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
