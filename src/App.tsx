import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Login from "./Login/Login";
import Homepage from "./Homepage/Homepage";
import Review from "./Review/Review";
import AboutUs from "./AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/homepage">
          <Homepage />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
