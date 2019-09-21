import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @font-face {
        font-family: 'Gilroy-Black';
        src: url('../fonts/Gilroy-Black.woff2') format('woff2'),
            url('../fonts/Gilroy-Black.woff') format('woff');
        font-weight: 900;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gilroy-RegularItalic';
        src: url('../fonts/Gilroy-RegularItalic.woff2') format('woff2'),
            url('../fonts/Gilroy-RegularItalic.woff') format('woff');
        font-weight: normal;
        font-style: italic;
    }

    @font-face {
        font-family: 'Gilroy-BackItalic';
        src: url('../fonts/Gilroy-BlackItalic.woff2') format('woff2'),
            url('../fonts/Gilroy-BlackItalic.woff') format('woff');
        font-weight: 900;
        font-style: italic;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url('../fonts/Gilroy-Regular.woff2') format('woff2'),
            url('../fonts/Gilroy-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gilroy-Light';
        src: url('../fonts/Gilroy-Light.woff2') format('woff2'),
            url('../fonts/Gilroy-Light.woff') format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gilroy-Bold';
        src: url('../fonts/Gilroy-ExtraBold.woff2') format('woff2'),
            url('../fonts/Gilroy-ExtraBold.woff') format('woff');
        font-weight: 800;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
        font-family: Gilroy Arial Helvetica sans-serif;
    }

    body, input, button {
        color: #222222;
        font-size: 14px;
    }

    button {
        cursor: pointer;
    }
`;