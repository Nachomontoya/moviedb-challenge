import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "../../pages/Home";
import { BrowserRouter } from "react-router-dom";

describe("Home page", () => {
  test("Home page is rendering", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(screen.getByText("Popular Movies" || "Popular Shows"));
  });
});
