import { useState } from "react";
import Form from "./Form";
import currencies from "./currencies/currencies";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ name }) => name === currency).rate;

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
