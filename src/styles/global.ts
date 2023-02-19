import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        ::selection {
            background-color: ${({ theme: { colors } }) => colors["brand-red"]};
        }
    }

    html {
        scroll-behavior: smooth;
    }

    body, textarea, input, button {
        font-family: "Raleway", sans-serif;
    } 

    body {
        background: ${({ theme: { colors, fontSizes } }) => colors["gray700"]};
    }

    img, svg {
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    ::-webkit-scrollbar {
    width: 1rem;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
    background: #E83752; 
    border-radius: 999px;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #D4203B; 
    }
`;
