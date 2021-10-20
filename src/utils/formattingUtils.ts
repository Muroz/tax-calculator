/**
 * Utility function to transform a number into a valid dollar string
 */
export const formatNumberToDollarCurrencyString = (value: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  const formattedValue = formatter.format(value);
  return formattedValue;
};

/**
 * Utility function to normalize strings and undefined values into numbers
 */
export const parseOptionalStringIntoNumber = (value: string | undefined) => {
  if (value) {
    return parseInt(value);
  }

  return 0;
};
