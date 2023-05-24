import { useState } from "react";
import Form from "./Form";
import { useCurrenciesData } from "./Form/useCurrenciesData";

function App() {
  const [result, setResult] = useState();
  const currenciesData = useCurrenciesData();

  const calculateResult = (amount, currency) => {
    const rate = currenciesData.rates[currency];

    setResult({
      inputValue: amount,
      outputValue: amount * rate,
      outputCurrency: currency,
    });
  };

  return (
    <Form
      calculateResult={calculateResult}
      result={result}
    />
  );
}

export default App;
