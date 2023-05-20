import currencies from "../currencies/currencies";
import { useState } from "react";
import Result from "./Result";
import Clock from "../Clock";
import { Button, Container, Fieldset, InputBox, Item, Legend, List, StyledForm } from "./styled";

const Form = ({ calculateResult, result }) => {
    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState(currencies[0].name);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    return (
        <Container>
            <StyledForm onSubmit={onFormSubmit}>
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
                                {currencies.map(currency => (
                                    <option
                                        key={currency.name}
                                        value={currency.name}
                                    >
                                        {currency.fullName}
                                    </option>
                                ))}
                            </InputBox>
                        </Item>
                        <Item>
                            <Button type="submit">Oblicz</Button>
                        </Item>
                    </List>
                    <Result result={result} />
                </Fieldset>
            </StyledForm>
        </Container>
    )
};

export default Form;