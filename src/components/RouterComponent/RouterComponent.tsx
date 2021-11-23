import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";

function RouterComponent(): React.ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default RouterComponent;
