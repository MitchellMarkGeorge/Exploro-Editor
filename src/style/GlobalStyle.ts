import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    // think about this
    html, body, #root {
        /* width: 100vw; */
        /* width: 100%; */
        /* height: 100vh; */
        /* min-height: 100vh; */
        height: 100%;
        /* min-height: 100%; */

    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
               Roboto, Oxygen-Sans, Ubuntu, Cantarell,
               "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility; // think about this
        line-height: 1.5;
    }
`;
