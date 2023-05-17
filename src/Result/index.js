const Result = ({ result }) => (
    <p>
        {result !== undefined && (
            <span>
                {parseFloat(result.inputValue)} PLN =
                {" "}
                {result.outputValue.toFixed(2)} {result.outputCurrency}
            </span>
        )}
    </p>
);

export default Result;