import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import App from "./App";
import Home from "./pages/Home";

export default () =>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <App>
        <Route exact path="/test" component={Home} />
      </App>
    </Switch>
  </BrowserRouter>;
