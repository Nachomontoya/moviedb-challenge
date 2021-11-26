import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import ContentDetails from "../../pages/ContentDetails";
import NotFound from "../../pages/NotFound";

function RouterComponent(): React.ReactElement {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact>
            <Home />
          </Route>
          <Route path={"/:content/:id"} exact>
            <ContentDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default RouterComponent;
