import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(time => new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return time;
};