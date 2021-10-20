import { BracketData } from "./types";
import { formatNumberToDollarCurrencyString } from "./utils/formattingUtils";

export const mockSalary = 10000;
export const mockTotalTax = 2000;
export const mockIncome = formatNumberToDollarCurrencyString(
  mockSalary - mockTotalTax
);

export const mockBrackets: BracketData[] = [
  {
    min: 50000,
    rate: 0.3
  },
  {
    max: 50000,
    rate: 0.15
  }
];
