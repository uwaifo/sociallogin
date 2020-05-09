import React from "react";
//
import Logintbygoogle from "./Logintbygoogle";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Logintbygoogle}></Route>

              <Route path="/Dashboard" component={Dashboard}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
