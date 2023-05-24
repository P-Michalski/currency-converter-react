import { StyledInfo } from "./styled";


export const Info = ({ date }) => (
    <StyledInfo>
        Kursy walut są pobierane z Europejskiego Banku Centralnego.<br/>
        Dane z dnia {date}.
    </StyledInfo>
)