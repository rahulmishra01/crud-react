import React from "react";
import Edit from "./components/Edit";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/edit/:id" component={Edit} />
        <Route exact path="/register" component={Registration} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
