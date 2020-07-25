import React from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import User from "./components/Users/User";
import GithubState from "./contexts/github/GithubState";

const App = () => {
  return (
    <GithubState>
      <BrowserRouter>
        <div className="App2">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </GithubState>
  );
};

export default App;
