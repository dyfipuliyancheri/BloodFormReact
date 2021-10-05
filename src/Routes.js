import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import ListView from "./ListView";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/view" component={ListView} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
