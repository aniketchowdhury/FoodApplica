import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/">
      <Login />
      </Route>
    </div>
    </Router>
  );
}

export default App;
