import { useEffect, useState } from "react";
import axios from "axios";

export const useCurrenciesData = () => {
    const [currenciesData, setCurrenciesData] = useState({
        phase: "loading",
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('https://api.exchangerate.host/latest?base=PLN');
                const date = await response.data.date;
                const rates = await response.data.rates;
                setCurrenciesData({
                    phase: "success",
                    date,
                    rates,
                });
            } catch (error) {
                setCurrenciesData({
                    phase: "error"
                });
            }
        };
        setTimeout(getData, 1000);
    }, []);

    return currenciesData;
};