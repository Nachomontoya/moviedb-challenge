import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ContentDetails from "../../pages/ContentDetails";
import { BrowserRouter } from "react-router-dom";
import Provider from "../../redux/provider";

describe("Home page", () => {
  test("Home page is rendering", () => {
    render(
      <Provider>
        <BrowserRouter>
          <ContentDetails />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText("Related Content"));
  });
});
