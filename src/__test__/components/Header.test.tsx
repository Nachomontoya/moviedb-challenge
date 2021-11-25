import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import { PUBLIC } from "../../constants/routes";

import Header from "../../components/Header";
import { BrowserRouter } from "react-router-dom";

describe("Render Header", () => {
  afterEach(cleanup);

  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );

  test("logo with link to home page is rendered", () => {
    const logo = screen.getByTestId("home-logo");
    expect(logo).toHaveAttribute("href", PUBLIC.HOME);
  });
});
