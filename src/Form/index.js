import { useState } from "react";
import Result from "./Result";
import Clock from "../Clock";
import { Button, Container, Fieldset, InputBox, Item, Legend, List, StyledForm } from "./styled";
import { useCurrenciesData } from "./useCurrenciesData";
import { Info } from "./Info";
import { LoadingMessage } from "./StatusMessage/LoadingMessage";
import { ErrorMessage } from "./StatusMessage/ErrorMessage";

const Form = ({ calculateResult, result }) => {
    const [amount, setAmount] = useState(0);
    const currenciesData = useCurrenciesData();
    const [currency, setCurrency] = useState("AED");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    return (
        <Container>
            <StyledForm onSubmit={onFormSubmit}>
                {currenciesData.status === "loading" ? (
                    <LoadingMessage />
                ) : (currenciesData.status === "error" ? (
                    <ErrorMessage />
                ) : (
                    <Fieldset>
                        <Legend>Kalkulator PLN na inną walutę</Legend>
                        <Clock />
                        <List>
                            <Item>
                                <label>Wpisz ilość PLN</label>
                                <InputBox
                                    type="number"
                                    required
                                    min="0"
                                    step="0.01"
                                    value={amount}
                                    onChange={({ target }) => setAmount(target.value)}
                                />
                            </Item>
                            <Item>
                                <label>Wybierz walutę</label>
                                <InputBox as="select"
                                    name="currency"
                                    value={currency}
                                    onChange={({ target }) => setCurrency(target.value)}
                                >
                                    {Object.keys(currenciesData.rates).map(currency => (
                                        <option
                                            key={currency}
                                            value={currency}
                                        >
                                            {currency}
                                        </option>
                                    ))}
                                </InputBox>
                            </Item>
                            <Item>
                                <Button type="submit">Oblicz</Button>
                            </Item>
                            <Item>
                                <Info date={currenciesData.date} />
                            </Item>
                        </List>
                        <Result result={result} />
                    </Fieldset>
                ))}
            </StyledForm>
        </Container>
    )
};

export default Form;