import "./style.css";
import currencies from "../currencies/currencies";
import { useState } from "react";
import Result from "../Result";
import Clock from "../Clock";

const Form = ({ calculateResult, result }) => {
    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState(currencies[0].name);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    return (
        <div className="container">
            <form className="form" onSubmit={onFormSubmit}>
                <fieldset className="form__fieldset">
                    <legend className="form__legend">Kalkulator PLN na inną walutę</legend>
                    <Clock />
                    <ul className="form__list">
                        <li className="form__listItem">
                            <label>Wpisz ilość PLN</label>
                            <input
                                type="number"
                                required
                                min="0"
                                step="0.01"
                                className="form__inputBox"
                                value={amount}
                                onChange={({ target }) => setAmount(target.value)}
                            />
                        </li>
                        <li className="form__listItem">
                            <label>Wybierz walutę</label>
                            <select
                                name="currency"
                                className="form__inputBox"
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
                            </select>
                        </li>
                        <li className="form__listItem">
                            <button type="submit" className="form__button">Oblicz</button>
                        </li>
                    </ul>
                    <Result result={result} />
                </fieldset>
            </form>
        </div>
    )
};

export default Form;