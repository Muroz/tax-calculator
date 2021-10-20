import React, { useEffect, useState } from "react";
import { BracketData } from "./types";
import Results from "./components/Results";
import TaxBracketsDisplay from "./components/BracketList";
import { getBracketBasedOnSalary } from "./utils/taxUtils";
import { parseOptionalStringIntoNumber } from "./utils/formattingUtils";
import { Header, Body, Input, AppContainer } from "./styles";
import { APP_COPY, APP_HEADER } from "./constants";

const App: React.FC = () => {
  const [salary, setSalary] = useState<number>(0);
  const [totalTax, setTotalTax] = useState<number>(0);
  const [taxBrackets, setTaxBrackets] = useState<BracketData[] | null>([]);

  const fetchTaxRates = async () => {
    const endpoint =
      process.env.REACT_APP_BRACKET_DATA_ENDPOINT ||
      "http://localhost:5000/tax-calculator/brackets/";

    try {
      const response = await fetch(endpoint);

      if (response.ok) {
        const { tax_brackets } = await response.json();
        setTaxBrackets(tax_brackets);
      } else {
        setTaxBrackets(null);
      }
    } catch (_) {
      setTaxBrackets(null);
    }
  };

  useEffect(() => {
    fetchTaxRates();
  }, []);

  useEffect(() => {
    if (taxBrackets && salary) {
      const currentBracket = getBracketBasedOnSalary(taxBrackets, salary);
      if (currentBracket) {
        const taxValue = currentBracket.rate * salary;
        setTotalTax(taxValue);
      }
    }
  }, [salary, taxBrackets]);

  return (
    <AppContainer>
      <Header>{APP_HEADER}</Header>
      <Body>{APP_COPY}</Body>
      <Input
        allowNegativeValue={false}
        decimalsLimit={0}
        defaultValue={0}
        onValueChange={(value) =>
          setSalary(parseOptionalStringIntoNumber(value))
        }
        min={0}
        name="salary"
        placeholder="Please enter your salary"
        prefix={"$"}
      />
      <Results salary={salary} totalTax={totalTax} />
      <TaxBracketsDisplay taxBrackets={taxBrackets} salary={salary} />
    </AppContainer>
  );
};

export default App;
