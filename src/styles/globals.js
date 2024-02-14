import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        text-decoration: none;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BG};
        color: ${({ theme }) => theme.COLORS.TEXT};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'NyghtSerif', serif;
        font-size: 1.6rem;
        outline: none;
    }

    button, a {
        cursor: pointer;
        transition: filter .2s;
    }

    button:hover, a:hover {
        filter: brightness(.9);
    }

    a:hover {
        color: ${({ theme }) => theme.COLORS.SELECTION};
    }
`;