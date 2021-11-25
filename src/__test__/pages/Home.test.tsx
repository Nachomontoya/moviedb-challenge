import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "../../pages/Home";
import { BrowserRouter } from "react-router-dom";
import Provider from "../../redux/provider";

describe("Home page", () => {
  test("Home page is rendering", () => {
    render(
      <Provider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText("Popular Movies" || "Popular Shows"));
  });
});
