import { useEffect, useState } from "react";
import axios from "axios";

const exchangeRateURL = 'https://api.exchangerate.host/latest?base=PLN';

export const useCurrenciesData = () => {
    const [currenciesData, setCurrenciesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(exchangeRateURL);
                const date = await response.data.date;
                const rates = await response.data.rates;
                setCurrenciesData({
                    status: "success",
                    date,
                    rates,
                });
            } catch (error) {
                setCurrenciesData({
                    status: "error"
                });
            }
        };
        setTimeout(getData, 1000);
    }, []);

    return currenciesData;
};