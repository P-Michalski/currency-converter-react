import { useState, useEffect } from "react";
import { StyledClock } from "./styled";

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
        <StyledClock>
            Dzisiaj jest {dateFormatted},
            {" "}
            {timeFormatted}
        </StyledClock>
    );
};

export default Clock;