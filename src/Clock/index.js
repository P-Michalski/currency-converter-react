import "./style.css";

const Clock = ({ time }) => (
    <p className="form__clock">
        Dzisiaj jest {time.toLocaleDateString(
            undefined, {month: "long", weekday: "long", day: "numeric"}
        )},
        {" "}
        {time.toLocaleTimeString()}
    </p>
);

export default Clock;