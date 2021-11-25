import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import { PUBLIC } from "../../constants/routes";

import Card from "../../components/Card";
import { BrowserRouter } from "react-router-dom";
import Provider from "../../redux/provider";

describe("Render Card", () => {
  afterEach(cleanup);

  render(
    <Provider>
      <BrowserRouter>
        <Card id={1234} isMovie={true} />
      </BrowserRouter>
      ,
    </Provider>,
  );

  test("Movie's cards has link to movie and id of the movie", () => {
    const CardTest = screen.getByTestId("card-test");
    expect(CardTest).toHaveAttribute("href", `${PUBLIC.MOVIES}/1234`);
  });
});
