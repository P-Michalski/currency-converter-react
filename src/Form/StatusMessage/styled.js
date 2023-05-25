import styled from "styled-components";

export const StyledMessage = styled.p`
    padding: 50px 10px;
    background-color: white;
    border: 2px solid black;
    border-radius: 20px;
`;

export const StyledLoading = styled(StyledMessage)`
    color: ${({ theme }) => theme.colors.mineShaft};
`;

export const StyledError = styled(StyledMessage)`
    color: ${({ theme }) => theme.colors.alzarinCrimson};
`;