import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
    const [time, setTime] = useState(new Date());
    const dateFormatted = time.toLocaleDateString(
        undefined, { month: "long", weekday: "long", day: "numeric" }
    );
    const timeFormatted = time.toLocaleTimeString();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(time => new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <p className="form__clock">
            Dzisiaj jest {dateFormatted},
            {" "}
            {timeFormatted}
        </p>
    );
};

export default Clock;