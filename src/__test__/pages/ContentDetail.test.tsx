import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ContentDetails from "../../pages/ContentDetails";
import { BrowserRouter } from "react-router-dom";

describe("Home page", () => {
  test("Home page is rendering", () => {
    render(
      <BrowserRouter>
        <ContentDetails />
      </BrowserRouter>,
    );
    expect(screen.getByText("Related Content"));
  });
});
