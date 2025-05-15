import { render, screen } from "@testing-library/react";
import React from "react";
import First from "./First";

describe("first suite", () => {
  it("First Component rendr correctly", () => {
    render(<First />);
    const linkedElement = screen.getByText("First");
    expect(linkedElement).toBeInTheDocument();
  });
});
