import { createGlobalStyle } from "styled-components";
import background from "./images/background.png";

export const GlobalStyles = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Lato', sans-serif;
        text-align: center;
        background-image: url("${background}");
        background-size: cover;
        background-repeat: no-repeat;
        background-color: #101246;
    }
`;
