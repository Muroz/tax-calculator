import React from "react";
import { formatNumberToDollarCurrencyString } from "../../utils/formattingUtils";
import {
  INCOME_LABEL,
  RESULTS_HEADER,
  SALARY_LABEL,
  TAXES_LABEL
} from "./constants";
import {
  ResultContainer,
  ResultLabel,
  ResultRow,
  ResultTitle,
  ResultValue
} from "./styles";

export interface ResultsProps {
  salary?: number;
  totalTax?: number;
}

const Results: React.FC<ResultsProps> = ({ salary = 0, totalTax = 0 }) => {
  return (
    <ResultContainer>
      <ResultTitle>{RESULTS_HEADER}</ResultTitle>
      <ResultRow>
        <ResultLabel>{SALARY_LABEL}</ResultLabel>
        <ResultValue>{formatNumberToDollarCurrencyString(salary)}</ResultValue>
      </ResultRow>
      <ResultRow>
        <ResultLabel bold>{TAXES_LABEL}</ResultLabel>
        <ResultValue bold>
          {formatNumberToDollarCurrencyString(totalTax)}
        </ResultValue>
      </ResultRow>
      <ResultRow>
        <ResultLabel bold>{INCOME_LABEL}</ResultLabel>
        <ResultValue bold color="#26638e">
          {formatNumberToDollarCurrencyString(Math.abs(salary - totalTax))}
        </ResultValue>
      </ResultRow>
    </ResultContainer>
  );
};

export default Results;
