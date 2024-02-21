import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary: #eb2f64;
        --color-primary-light: #ff3366;
        --color-primary-dark: #ba265d;

        --color-grey-light-1: #faf9f9;
        --color-grey-light-2: #f4f2f2;
        --color-grey-light-3: #f0eeee;
        --color-grey-light-4: #ccc;

        --color-grey-dark-1: #333;
        --color-grey-dark-2: #777;
        --color-grey-dark-3: #999;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-weight: 400;
        line-height: 1.6;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`;

export default GlobalStyles;