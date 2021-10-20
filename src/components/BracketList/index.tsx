import React from "react";
import { nanoid } from "nanoid";
import { BracketData } from "../../types";
import { NO_BRACKET_DATA_COPY } from "./constants";
import {
  getBracketIndexBasedOnSalary,
  getBracketLabel
} from "../../utils/taxUtils";
import { BracketList, Bracket } from "./styles";

export interface TaxBracketsDisplayProps {
  taxBrackets?: BracketData[] | null;
  salary?: number;
}

const TaxBracketsDisplay: React.FC<TaxBracketsDisplayProps> = ({
  taxBrackets,
  salary
}) => {
  if (!taxBrackets) {
    return <span>{NO_BRACKET_DATA_COPY}</span>;
  }
  const selectedBracket = getBracketIndexBasedOnSalary(taxBrackets, salary);

  return (
    <BracketList>
      {taxBrackets.map((taxBracket, index) => {
        const { rate } = taxBracket;
        const isCurrentBracket = selectedBracket === index;

        return (
          <Bracket key={nanoid()} isCurrent={isCurrentBracket}>
            <span>{getBracketLabel(taxBracket)}</span>
            <span>Rate: {Math.round(rate * 100 * 100) / 100}%</span>
          </Bracket>
        );
      })}
    </BracketList>
  );
};

export default TaxBracketsDisplay;
