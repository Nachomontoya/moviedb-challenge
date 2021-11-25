import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import MovieDetails from "../../pages/MovieDetails";
import ShowDetails from "../../pages/ShowDetails";

function RouterComponent(): React.ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact>
          <Home />
        </Route>
        <Route path={"/movie/:id"} exact>
          <MovieDetails />
        </Route>
        <Route path={"/tv/:id"} exact>
          <ShowDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default RouterComponent;
