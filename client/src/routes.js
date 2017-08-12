import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import App from "./App";
import Home from "./pages/Home";
import Boards from "./pages/Boards";

export default () =>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <App>
        <Route path="/:boardslug" component={Boards} />
      </App>
    </Switch>
  </BrowserRouter>;
