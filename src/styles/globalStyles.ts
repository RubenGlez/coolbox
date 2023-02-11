import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    html {
        font-size: 16px;
    }
    body {
        margin: 0;
        padding: 0;
        background: #ffffff;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }
`;

export default GlobalStyle;
