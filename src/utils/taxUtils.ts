import { BracketData } from "./../types";
import { formatNumberToDollarCurrencyString } from "./formattingUtils";

/**
 * Utility function that returns the index of the effective bracket
 * based on the salary passed if applicable
 */
export const getBracketIndexBasedOnSalary = (
  brackets: BracketData[],
  salary?: number
) => {
  if (!salary) return null;

  const index = brackets.findIndex(({ max, min }) => {
    if (max && min) {
      return salary < max && salary > min;
    } else if (max) {
      return salary < max;
    } else if (min) {
      return salary > min;
    }
    return false;
  });

  return index;
};

/**
 * Utility function that returns the bracket data of the effective bracket
 * based on the salary passed if applicable
 */
export const getBracketBasedOnSalary = (
  brackets: BracketData[],
  salary?: number
) => {
  if (!salary) return null;

  const bracket = brackets.find(({ max, min }) => {
    if (max && min) {
      return salary < max && salary > min;
    } else if (max) {
      return salary < max;
    } else if (min) {
      return salary > min;
    }
    return false;
  });

  return bracket;
};

/**
 * Utility function that returns the appropiate label for the bracket
 * based on its data structure
 */
export const getBracketLabel = (bracket: BracketData) => {
  const { max, min } = bracket;

  if (max && min) {
    return `${formatNumberToDollarCurrencyString(
      min
    )} - ${formatNumberToDollarCurrencyString(max)}`;
  } else if (max) {
    return `${formatNumberToDollarCurrencyString(max)} or less`;
  } else if (min) {
    return `More than ${formatNumberToDollarCurrencyString(min)}`;
  }
};
