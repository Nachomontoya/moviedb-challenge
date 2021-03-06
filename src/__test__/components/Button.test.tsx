import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "../../components/Button";

describe("Render Button", () => {
  afterEach(cleanup);

  render(
    <Button isActive={true} onClick={() => ({})}>
      Test
    </Button>,
  );

  test("Button active's background is blue", () => {
    const buttonTest = screen.getByTestId("btn-text");
    expect(buttonTest).toHaveClass("active");
  });
});
