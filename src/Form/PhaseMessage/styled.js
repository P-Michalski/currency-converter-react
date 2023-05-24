import styled, { css } from "styled-components";

export const StyledMessage = styled.p`
    padding: 50px 10px;
    background-color: white;
    border: 2px solid black;
    border-radius: 20px;

    ${({loading}) => loading && css`
        color: ${({ theme }) => theme.colors.mineShaft};
    `}

    ${({error}) => error && css`
    color: ${({ theme }) => theme.colors.alzarinCrimson};
    `}
`;