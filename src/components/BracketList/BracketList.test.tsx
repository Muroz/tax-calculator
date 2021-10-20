import React from "react";
import { render, screen } from "@testing-library/react";
import BracketList from "./index";
import { NO_BRACKET_DATA_COPY } from "./constants";
import { mockBrackets, mockSalary } from "../../mocks";

describe("The BracketList component", () => {
  test("renders the appropriate message when there is no bracket data available", () => {
    render(<BracketList />);
    const messageElement = screen.getByText(NO_BRACKET_DATA_COPY);
    expect(messageElement).toBeInTheDocument();
  });
});
