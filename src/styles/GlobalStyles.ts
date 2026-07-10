import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*{

    margin:0;

    padding:0;

    box-sizing:border-box;

}

html{

    scroll-behavior:smooth;

}

body{

    font-family:Roboto,sans-serif;

    background:#F8F4EC;

    color:#2E2E2E;

}

a{

    text-decoration:none;

    color:inherit;

}

button{

    cursor:pointer;

    border:none;

    background:none;

    font-family:inherit;

}

img{

    max-width:100%;

    display:block;

}

`;

export default GlobalStyles;