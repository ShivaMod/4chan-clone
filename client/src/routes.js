import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import App from "./App";
import Home from "./pages/Home";
import Boards from "./pages/Boards";
import Thread from "./pages/Thread"

export default () =>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <App>
        <Route exact path="/:boardslug" component={Boards} />
        <Route exact path="/:boardslug/thread/:threadid" component={Thread} />
      </App>
    </Switch>
  </BrowserRouter>;
