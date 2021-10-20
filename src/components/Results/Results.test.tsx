import React from "react";
import { render, screen } from "@testing-library/react";
import Results from "./index";
import { INCOME_LABEL, SALARY_LABEL, TAXES_LABEL } from "./constants";
import { mockIncome, mockSalary, mockTotalTax } from "../../mocks";

const resultRows = [INCOME_LABEL, SALARY_LABEL, TAXES_LABEL];

describe("The Results component", () => {
  test("renders the appropriate amount of rows with $0s by default", () => {
    render(<Results />);
    const results = screen.getAllByText("$0");
    expect(results).toHaveLength(resultRows.length);
  });

  test("renders the appropriate amount of income after taxes given a salary and tax value", () => {
    render(<Results salary={mockSalary} totalTax={mockTotalTax} />);
    const results = screen.getByText(`${mockIncome}`);
    expect(results).toBeInTheDocument();
  });
});
