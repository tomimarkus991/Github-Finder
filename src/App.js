import React from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import User from "./components/Users/User";
import GithubState from "./contexts/github/GithubState";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <GithubState>
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </GithubState>
  );
};

export default App;
